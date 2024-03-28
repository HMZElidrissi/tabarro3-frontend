import middleware from "next-auth/middleware";

export default middleware;

export const config = {
  // *: zero or more parameters
  // ?: zero or one parameter
  // +: one or more parameters
  matcher: ["/dashboard/:path*"],
};
