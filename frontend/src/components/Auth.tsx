import { type signupInput } from "@atharva846/medium-common";
import { useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Button, Input } from "./ui";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<signupInput>({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function sendRequest() {
    setError("");
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );
      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (err: unknown) {
      const axiosError = err as { response?: { data?: { message?: string } } };
      setError(axiosError.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  const handleChange = (field: keyof signupInput) => (e: ChangeEvent<HTMLInputElement>) => {
    setPostInputs({ ...postInputs, [field]: e.target.value });
    if (error) setError("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link to="/blogs" className="inline-flex items-center gap-2 font-semibold text-2xl text-[var(--color-text-primary)] mb-8">
            <svg
              className="h-8 w-8 text-[var(--color-accent-primary)]"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
            </svg>
            <span>Medium</span>
          </Link>
          <h1 className="text-3xl font-bold text-[var(--color-text-primary)]">
            {type === "signup" ? "Create your account" : "Welcome back"}
          </h1>
          <p className="mt-2 text-[var(--color-text-secondary)]">
            {type === "signup"
              ? "Start writing and sharing your stories"
              : "Sign in to continue reading and writing"}
          </p>
        </div>

        <div className="bg-[var(--color-bg-card)] border border-[var(--color-border-primary)] rounded-xl p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={(e) => { e.preventDefault(); sendRequest(); }} className="space-y-5">
            {type === "signup" && (
              <Input
                label="Name"
                placeholder="John Doe"
                value={postInputs.username}
                onChange={handleChange("username")}
                required
                autoComplete="name"
              />
            )}

            <Input
              label="Email"
              placeholder="john@example.com"
              type="email"
              value={postInputs.email}
              onChange={handleChange("email")}
              required
              autoComplete="email"
            />

            <Input
              label="Password"
              placeholder="••••••••"
              type="password"
              value={postInputs.password}
              onChange={handleChange("password")}
              required
              autoComplete={type === "signup" ? "new-password" : "current-password"}
            />

            <Button type="submit" className="w-full mt-2" isLoading={isLoading}>
              {type === "signup" ? "Create account" : "Sign in"}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-[var(--color-text-secondary)]">
            {type === "signup" ? "Already have an account?" : "Don't have an account?"}{" "}
            <Link
              to={type === "signup" ? "/signin" : "/signup"}
              className="font-medium text-[var(--color-accent-primary)] hover:text-[var(--color-accent-hover)] transition-colors"
            >
              {type === "signup" ? "Sign in" : "Sign up"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;