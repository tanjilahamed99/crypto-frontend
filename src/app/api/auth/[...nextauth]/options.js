import axios from "axios";
import CredentialsProvider from "next-auth/providers/credentials";
import { BASE_URL } from "@/constant/constant";

export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        wallet: { label: "wallet", type: "string" },
        email: { level: "email", type: "email" },
        email: { level: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const { wallet, email, password } = credentials || {};
        if (!wallet) {
          throw new Error("Wallet address is required.");
        }

        try {
          const response = await axios.post(`${BASE_URL}/logInUser`, {
            wallet,
            email,
            password,
          });

          const { status, data: user } = response.data;

          if (!status || !user) {
            throw new Error("Invalid credentials or user not found.");
          }

          return {
            id: user._id.toString(),
            email: user.email,
            username: user.username,
            wallet: user.wallet,
            joined: user.joined,
            picture: user.picture,
            referBy: user.referBy,
            role: user?.role,
            provider: "credentials",
          };
        } catch (error) {
          console.error("Error in authorization:", error.message);
          throw new Error("Failed to authorize user.");
        }
      },
    }),
  ],
  secret: "secret-top",
  callbacks: {
    async session({ session, token }) {
      session.user = token?.user;
      return session;
    },
    async jwt({ token, user, account }) {
      if (account?.provider === "credentials") {
        try {
          const response = await axios.get(
            BASE_URL + `/user/data?wallet=${user?.wallet}`
          );

          token.user = response.data;
        } catch (error) {
          console.error("Error fetching user data:", error.message);
        }
      }
      return token;
    },
  },
  pages: {
    signIn: "/register",
    error: "/",
  },
};
