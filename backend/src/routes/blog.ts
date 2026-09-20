import { Hono } from "hono";
import postgres from "@prisma/orm-postgres/runtime";
import type { Contract } from "../prisma/contract";
import contractJson from "../prisma/contract.json" with { type: "json" };
import { sign, verify } from "hono/jwt";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

blogRouter.use("/*", async (c, next) => {
  const authHeader = c.req.header("Authorization") || "";

  const response = await verify(authHeader, c.env.JWT_SECRET, "HS256");

  if (response && typeof response.id === "string") {
    c.set("userId", response.id);

    await next();
    return;
  }

  return c.json(
    {
      msg: "You are not Logged-In",
    },
    403,
  );
});

blogRouter.post("/", async (c) => {
  const db = postgres<Contract>({
    contractJson,
    url: c.env.DATABASE_URL,
  });

  const body = await c.req.json();
  const authorId = c.get("userId");

  const blog = await db.orm.public.Post.create({
    title: body.title,
    content: body.content,
    authorId: authorId,
  });

  return c.json({
    id: blog.id,
  });
});

blogRouter.put("/", async (c) => {
  const db = postgres<Contract>({
    contractJson,
    url: c.env.DATABASE_URL,
  });

  const body = await c.req.json();

  try {
    const blog = await db.orm.public.Post.where({
      id: body.id,
    }).update({
      title: body.title,
      content: body.content,
    });

    return c.json({
      blog,
    });
  } catch (e) {
    return c.json(
      {
        msg: "something went wrong",
      },
      411,
    );
  }
});

blogRouter.get("/bulk", async (c) => {
  const db = postgres<Contract>({
    contractJson,
    url: c.env.DATABASE_URL,
  });

  console.log(c.env.DATABASE_URL);
  const blogs = await db.orm.public.Post.all();

  return c.json({
    blogs,
  });
});

blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  const db = postgres<Contract>({
    contractJson,
    url: c.env.DATABASE_URL,
  });

  try {
    const blog = await db.orm.public.Post.where({
      id: id,
    }).first();

    if (!blog) {
      return c.json(
        {
          msg: "blog not found",
        },
        404,
      );
    }

    return c.json({
      blog,
    });
  } catch (e) {
    return c.json(
      {
        msg: "something went wrong",
      },
      500,
    );
  }
});

export default blogRouter;
