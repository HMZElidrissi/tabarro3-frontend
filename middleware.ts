import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import { i18n } from "./app/i18n-config";

const ROLES = {
  ADMIN: 1,
  ORGANIZATION: 2,
  PARTICIPANT: 3,
};

const ROUTES = {
  guest: ["/signin", "/signup", "/api/auth/signin"],
  organization: ["/organization/campaigns", "/dashboard"],
  admin: ["/admin/participants", "/admin/organizations", "/dashboard"],
  participant: ["/", "/profile"],
};

function isAssetPath(pathname: string) {
  const assetExtensions = [
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".svg",
    ".ico",
    ".css",
    ".js",
  ];
  return (
    assetExtensions.some((ext) => pathname.endsWith(ext)) ||
    pathname.startsWith("/_next")
  );
}

function canAccess(route: string, role: number) {
  switch (role) {
    case ROLES.ORGANIZATION:
      return ROUTES.organization.includes(route);
    case ROLES.ADMIN:
      return ROUTES.admin.includes(route);
    case ROLES.PARTICIPANT:
      return ROUTES.participant.includes(route);
    default:
      return false;
  }
}

function redirectByRole(role: number, lang: string) {
  switch (role) {
    case ROLES.ORGANIZATION:
    case ROLES.ADMIN:
      return `/${lang}/dashboard`;
    case ROLES.PARTICIPANT:
      return `/${lang}`;
    default:
      return `/${lang}/signin`;
  }
}

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  let pathname = url.pathname;

  // Skip middleware for asset paths
  if (isAssetPath(pathname)) {
    return NextResponse.next();
  }

  // Check for language in the URL
  const pathnameLocale = pathname.split("/")[1];
  const isValidLocale = i18n.locales.includes(pathnameLocale as any);

  // Get stored language from cookie
  let storedLang = req.cookies.get("NEXT_LOCALE")?.value;

  // If there's a valid locale in the URL, update the cookie
  if (isValidLocale) {
    storedLang = pathnameLocale;
  }

  // If no valid stored language, use default
  if (!i18n.locales.includes(storedLang as any)) {
    storedLang = i18n.defaultLocale;
  }

  // Handle root path
  if (pathname === "/") {
    const response = NextResponse.redirect(new URL(`/${storedLang}`, req.url));
    response.cookies.set("NEXT_LOCALE", storedLang as string);
    return response;
  }

  // Redirect if there is no locale in the pathname
  if (!isValidLocale) {
    pathname = `/${storedLang}${pathname}`;
    const response = NextResponse.redirect(new URL(pathname, req.url));
    response.cookies.set("NEXT_LOCALE", storedLang as string);
    return response;
  }

  // For valid locale paths, ensure the cookie is set
  const response = NextResponse.next();
  response.cookies.set("NEXT_LOCALE", storedLang as string);

  // Strip locale from pathname for route checking
  const pathnameWithoutLocale = pathname.replace(/^\/[a-z]{2}/, "");

  // Authentication and role-based routing
  const token = await getToken({ req });
  const isAuthenticated = !!token;
  const role = token?.role as number;

  const protectedRoutes = [...ROUTES.organization, ...ROUTES.admin, "/profile"];

  if (protectedRoutes.includes(pathnameWithoutLocale) && !isAuthenticated) {
    return NextResponse.redirect(new URL(`/${storedLang}/signin`, req.url));
  }

  if (
    protectedRoutes.includes(pathnameWithoutLocale) &&
    !canAccess(pathnameWithoutLocale, role)
  ) {
    return NextResponse.redirect(
      new URL(redirectByRole(role, storedLang as string), req.url),
    );
  }

  if (
    ROUTES.participant.includes(pathnameWithoutLocale) &&
    isAuthenticated &&
    role !== ROLES.PARTICIPANT
  ) {
    return NextResponse.redirect(new URL(`/${storedLang}/dashboard`, req.url));
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
