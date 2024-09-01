import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "fr", "ar"];
const defaultLocale = "fr";

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

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (isAssetPath(pathname)) {
    return NextResponse.next();
  }

  // Handle root path explicitly
  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, req.url));
  }

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

  const token = await getToken({ req });
  const isAuthenticated = !!token;
  const role = token?.role as number;
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
  const canAccess = (route: string, role: number) => {
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
  };
  const redirectByRole = (role: number) => {
    switch (role) {
      case ROLES.ORGANIZATION:
      case ROLES.ADMIN:
        return "/dashboard";
      case ROLES.PARTICIPANT:
        return "/";
      default:
        return "/signin";
    }
  };
  const protectedRoutes = [...ROUTES.organization, ...ROUTES.admin, "/profile"];

  // Strip locale from pathname for route checking
  const pathnameWithoutLocale = pathname.replace(/^\/[a-z]{2}/, "");

  // Existing authentication and role-based routing
  if (protectedRoutes.includes(pathnameWithoutLocale) && !isAuthenticated) {
    return NextResponse.redirect(new URL(`/${defaultLocale}/signin`, req.url));
  }

  if (
    protectedRoutes.includes(pathnameWithoutLocale) &&
    !canAccess(pathnameWithoutLocale, role)
  ) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${redirectByRole(role)}`, req.url),
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
