import { Hono } from "hono";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

blogRouter.use("/blog/*", async (c, next) => {
  const header = c.req.header("Authorization");
  //@ts-ignore
  const response = await verify(header, c.env.JWT_SECRET);

  if (response.id) {
    next();
  } else {
    return c.json({
      msg: "unauthorized",
    });
  }

  await next();
});

blogRouter.post("/blog", (c) => {
  return c.text("Hello Hono!");
});

blogRouter.put("/blog", (c) => {
  return c.text("Hello Hono!");
});

blogRouter.get("/blog/:id", (c) => {
  return c.text("Hello Hono!");
});