import z from "zod";

export const userSchema = z.object({
  email: z.email(),
  password: z
    .number()
    .min(4, { error: `password should be more than 4 characters` })
    .max(8, { error: `password should be less than 8 characters` }),
  firstName: z.string(),
  lastName: z.string(),
});
