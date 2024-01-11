"use server";

import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/schemas";
import { z } from "zod";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }
  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return { error: "Email already exists!" };
  }
  await db.user.create({ data: { name, password: hashedPassword, email } });
  return { success: "Email sent!" };
};
