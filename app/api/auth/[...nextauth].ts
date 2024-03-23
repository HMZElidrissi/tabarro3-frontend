import NextAuth from "next-auth";
import Providers from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {},
      authorize: async (credentials) => {
        try {
          const url = `${process.env.NEXT_PUBLIC_API_URL}/login`;
          const { data } = await axios.post(url, credentials);
          if (data) {
            return Promise.resolve(data);
          } else {
            return Promise.resolve(null);
          }
        } catch (error) {
          return Promise.resolve(null);
        }
      },
    }),
  ],
  callbacks: {
    async jwt(token, user) {
      if (user) {
        token.accessToken = user.token;
      }
      return token;
    },
    async session(session, token) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
});
