import common, { type signupInput } from "@atharva846/medium-common";
import { useState, type ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<signupInput>({
    username: "",
    email: "",
    password: "",
  });

  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs,
      );
      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch {
      alert("Error while signup/signin")
    }
  }

  return (
    <>
      <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
          <div>
            <div className="text-3xl font-extrabold">Create an account</div>
            <div>
              {type === "signin"
                ? "Don't have an account?"
                : "Already have an account?"}
              <Link
                className="pl-2 underline"
                to={type === "signin" ? "/signup" : "/signin"}
              >
                {type === "signin" ? "Sign up" : "Sign in"}
              </Link>
            </div>
            <div className="mt-6">
              {type === "signup" ? (
                <LabelledInput
                  label="Name"
                  placeholder="Atharva Pawar"
                  onChange={(e) => {
                    setPostInputs({
                      ...postInputs,
                      username: e.target.value,
                    });
                  }}
                />
              ) : null}
              <LabelledInput
                label="Email"
                placeholder="atharvapawar@gmail.com"
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    email: e.target.value,
                  });
                }}
              />
              <LabelledInput
                label="Password"
                placeholder="abc@123"
                type="password"
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    password: e.target.value,
                  });
                }}
              />
            </div>
            <div className="pt-6">
              <button
                onClick={sendRequest}
                type="button"
                className="pointer w-full text-body bg-neutral-primary border border-default hover:bg-neutral-secondary-soft hover:text-semibold focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
              >
                {type === "signup" ? "Sign up" : "Sign in"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <>
      <label className="block mb-2.5 pt-3 text-sm font-semibold text-heading">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
        placeholder={placeholder}
        required
      />
    </>
  );
}

export default Auth;
