import { Hono } from "hono";
import postgres from "@prisma/orm-postgres/runtime";
import type { Contract } from "./prisma/contract.d";
import contractJson from "./prisma/contract.json" with { type: "json" };
import { sign, verify } from "hono/jwt";
import { whereExprKinds } from "@prisma/orm-postgres/relational-core";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string
  };
}>();

app.use("/api/v1/blog/*", async (c, next)=>{

  const header = c.req.header("Authorization")
  const response = await verify(header, c.env.JWT_SECRET)

  if(response.id){
    next()
  }else{
    return c.json({
      msg: "unauthorized"
    })
  }

  await next()
})

app.post("/api/v1/signup", async (c) => {
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

app.post("/api/v1/signin", async (c) => {

  const db = postgres<Contract>({
    contractJson,
    url: c.env.DATABASE_URL
  })

  const body = await c.req.json()
  //@ts-ignore
  const user = await db.orm.public.User.findUnique({
    where: {
      email: body.email,
    }
  })

  const jwt = await sign({id: user.id}, c.env.JWT_SECRET)
});

app.post("/api/v1/blog", (c) => {
  return c.text("Hello Hono!");
});

app.put("/api/v1/blog", (c) => {
  return c.text("Hello Hono!");
});

app.get("/api/v1/blog/:id", (c) => {
  return c.text("Hello Hono!");
});

export default app;
