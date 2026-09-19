import { Hono } from "hono";
import postgres from "@prisma/orm-postgres/runtime";
import type { Contract } from "../prisma/contract";
import contractJson from "../prisma/contract.json" with { type: "json" };
import { sign, verify, decode } from "hono/jwt";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const db = postgres<Contract>({
    contractJson,
    url: c.env.DATABASE_URL,
  });

  const body = await c.req.json();

  const user = await db.orm.public.User.create({
    email: body.email,
    password: body.password,
  });

  const token = await sign({ id: user.id }, c.env.JWT_SECRET);

  return c.json({ msg: token });
});

userRouter.post("/signin", async (c) => {
  const db = postgres<Contract>({
    contractJson,
    url: c.env.DATABASE_URL,
  });

  const body = await c.req.json();

  const user = await db.orm.public.User.where({
    email: body.email,
    password: body.password,
  }).first();

  if (!user) {
    return c.json(
      {
        msg: "user is unauthorized",
      },
      403,
    );
  }

  const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);

  return c.json({
    token: jwt,
  });
});
