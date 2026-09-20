import z from "zod";
declare const signupInput: any;
declare const signinInput: any;
declare const createBlogInputs: any;
declare const updateBlogInput: any;
export type signupInput = z.infer<typeof signupInput>;
export type signinInput = z.infer<typeof signinInput>;
export type createBlogInputs = z.infer<typeof createBlogInputs>;
export type updateBlogInput = z.infer<typeof updateBlogInput>;
declare const _default: {
    signupInput: any;
    signinInput: any;
    createBlogInputs: any;
    updateBlogInput: any;
};
export default _default;
//# sourceMappingURL=index.d.ts.map