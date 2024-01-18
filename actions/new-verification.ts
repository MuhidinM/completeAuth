"use server";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { getVerificationByToken } from "@/data/verification-data";

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationByToken(token);

  if (!existingToken) return { error: "Token not found" };

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) return { error: "Token has expired" };

  const existingUser = await getUserByEmail(existingToken.email);
  if (!existingUser) return { error: "Email does not exist" };
  await db.user.update({
    where: {
      id: existingUser.id,
    },
    data: {
      emailVerified: new Date(),
      email: existingUser.email,
    },
  });
  await db.verificationToken.delete({
    where: { id: existingToken.id },
  });
  return { success: "Email verified!" };
};
