import {getToken} from "next-auth/jwt";
import {NextRequest, NextResponse} from "next/server";

/**
 * The system roles
 */
/*
const ROLES = {
    ORGANIZATION: 1,
    ADMIN: 2,
    PARTICIPANT: 3,
};

const ROUTES = {
    guest: ["/signin", "/signup", "/api/auth/signin"],
    organization: ["/organization/campaigns", "/dashboard"],
    admin: ["/admin/participants", "/admin/organizations", "/dashboard"],
    participant: ["/profile"],
};

/**
 * Check if the user can access the route
 * @param route
 * @param role
 */
/*
function canAccess(route: string, role: number): boolean {
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

export default async function middleware(req: NextRequest) {
    const token = await getToken({req});
    const isAuthenticated = !!token;
    const role = token?.role as number;

    const pathname = req.nextUrl.pathname;
    const redirectTo = (path: string) =>
        NextResponse.redirect(new URL(path, req.url));

    if (ROUTES.guest.includes(pathname)) {
        if (isAuthenticated) {
            return redirectTo(
                role === ROLES.ORGANIZATION || role === ROLES.ADMIN
                    ? "/dashboard"
                    : "/",
            );
        }
        return undefined;
    }

    if (ROUTES.organization.includes(pathname) || ROUTES.admin.includes(pathname)) {
        if (!isAuthenticated) {
            return redirectTo("/signin");
        } else if (!canAccess(pathname, role)) {
            return redirectTo("/dashboard");
        }
    }

    if (ROUTES.participant.includes(pathname)) {
        if (!isAuthenticated) {
            return redirectTo("/signin");
        } else if (!canAccess(pathname, role)) {
            return redirectTo("/");
        }
    }

    return undefined;
}
*/

/**
 * Middleware to protect routes, Version 1
 * @param req
 * @returns {Promise<NextResponse | undefined>}
 */

export default async function middleware(req: NextRequest) {
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

  if (protectedRoutes.includes(req.nextUrl.pathname) && !isAuthenticated) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  if (
    protectedRoutes.includes(req.nextUrl.pathname) &&
    !canAccess(req.nextUrl.pathname, role)
  ) {
    return NextResponse.redirect(new URL(redirectByRole(role), req.url));
  }

  if (
    ROUTES.participant.includes(req.nextUrl.pathname) &&
    isAuthenticated &&
    role !== ROLES.PARTICIPANT
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
}
