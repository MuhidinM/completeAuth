import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./schemas";
import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import { getUserByEmail } from "./data/user";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFeilds = LoginSchema.safeParse(credentials);

        if (validatedFeilds.success) {
          const { email, password } = validatedFeilds.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (!passwordMatch) return user;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
 