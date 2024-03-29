/*
 * TODO: Implement middleware to protect routes
 * Define the paths that require the user to be authenticated
 * const protectedRoutes = ["/dashboard", "/profile"];
 * const guestRoutes = ["/signin", "/signup"];
 * const roleSpecificRoutes = {
 *   admin: ["/admin"],
 *   // ... other roles
 * };
 */

import { getToken } from "next-auth/jwt";
import { NextResponse, NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  const isAuthenticated = !!token;

  if (req.nextUrl.pathname.startsWith("/signin")) {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
}
