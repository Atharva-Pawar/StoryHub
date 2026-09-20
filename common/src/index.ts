import z from "zod";

const signupInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  username: z.string().optional(),
});

const signinInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const createBlogInputs = z.object({
  title: z.string(),
  content: z.string(),
});

const updateBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  id: z.string(),
});

export type signupInput = z.infer<typeof signupInput>;
export type signinInput = z.infer<typeof signinInput>;
export type createBlogInputs = z.infer<typeof createBlogInputs>;
export type updateBlogInput = z.infer<typeof updateBlogInput>;

export default { signupInput, signinInput, createBlogInputs, updateBlogInput };
