import * as z from "zod";

export const NewPasswordSchema = z.object({
  password: z.string().min(6, { message: "Password minimum character is 6" }),
});

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const ResentSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(6, { message: "Password minimum character is 6" }),
  name: z.string().min(1, { message: "Name is required" }),
});
