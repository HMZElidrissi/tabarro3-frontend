import "next-auth";

declare module "next-auth" {
  /**
   * Extends the built-in session types to include the accessToken property
   */
  interface Session {
    accessToken?: string;
    user: User;
  }

  /**
   * Extends the built-in user types to include the token property
   */
  interface User {
    id?: number;
    token?: string;
    role: number;
  }
}
