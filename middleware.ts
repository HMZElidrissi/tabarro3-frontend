import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "fr", "ar"];
const defaultLocale = "fr";

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

function redirectByRole(role: number) {
  switch (role) {
    case ROLES.ORGANIZATION:
    case ROLES.ADMIN:
      return "/dashboard";
    case ROLES.PARTICIPANT:
      return "/";
    default:
      return "/signin";
  }
}

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // Skip middleware for asset paths
  if (isAssetPath(pathname)) {
    return NextResponse.next();
  }

  // Handle root path explicitly
  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, req.url));
  }

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, req.url),
    );
  }

  // Extract locale from pathname
  const locale = pathname.split("/")[1];

  // Strip locale from pathname for route checking
  const pathnameWithoutLocale = pathname.replace(/^\/[a-z]{2}/, "");

  // Authentication and role-based routing
  const token = await getToken({ req });
  const isAuthenticated = !!token;
  const role = token?.role as number;

  const protectedRoutes = [...ROUTES.organization, ...ROUTES.admin, "/profile"];

  if (protectedRoutes.includes(pathnameWithoutLocale) && !isAuthenticated) {
    return NextResponse.redirect(new URL(`/${locale}/signin`, req.url));
  }

  if (
    protectedRoutes.includes(pathnameWithoutLocale) &&
    !canAccess(pathnameWithoutLocale, role)
  ) {
    return NextResponse.redirect(
      new URL(`/${locale}${redirectByRole(role)}`, req.url),
    );
  }

  if (
    ROUTES.participant.includes(pathnameWithoutLocale) &&
    isAuthenticated &&
    role !== ROLES.PARTICIPANT
  ) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}/dashboard`, req.url),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
