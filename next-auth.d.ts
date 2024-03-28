import "next-auth";

declare module "next-auth" {
  /**
   * Extends the built-in session types to include the accessToken property
   */
  interface Session {
    accessToken?: string;
  }

  /**
   * Extends the built-in user types to include the token property
   */
  interface User {
    token?: string;
  }
}
