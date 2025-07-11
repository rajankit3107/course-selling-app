import z from "zod";

export const signupSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(4, { error: `password should be more than 4 characters` })
    .max(8, { error: `password should be less than 8 characters` }),
  firstName: z.string(),
  lastName: z.string(),
});

export const signinSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(4, { error: `password should be more than 4 characters` })
    .max(8, { error: `password should be less than 8 characters` }),
});
