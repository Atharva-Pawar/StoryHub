import { Hono } from "hono";
import postgres from "@prisma/orm-postgres/runtime";
import type { Contract } from "./prisma/contract.d";
import contractJson from "./prisma/contract.json" with { type: "json" };
import { sign, verify, decode } from "hono/jwt";
import { MESSAGE_MATCHER_IS_ALREADY_BUILT } from "hono/router";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blog";
import { cors } from "hono/cors";

const app = new Hono();

app.use("/*", cors())
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

export default app;
