"use client";

import { useState } from "react";
import OauthSignIn from "../components/OauthSignIn";
import { useRouter } from "next/navigation";
import { doCredentialLogin } from "../actions/authAction";

export default function LoginPageClient() {
  const [isRegister, setIsRegister] = useState(false);

  const router = useRouter();
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);

      const result = await doCredentialLogin(formData);

      if (!result.success) {
        setError(result?.message);
      } else {
        router.push("/home");
      }
    } catch (e) {
      console.error(e);
      setError("Wrong! Please Check your Credentials");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-center">
          {isRegister ? "Create an Account" : "Sign In"}
        </h2>

        {/* Login Form */}
        {!isRegister && (
          <>
            <div className="text-xl text-red-500">{error}</div>
            <form onSubmit={onSubmit} className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border px-4 py-2 rounded-lg"
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full border px-4 py-2 rounded-lg"
                required
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
              >
                Sign In
              </button>
            </form>
          </>
        )}

        {/* Register Form */}
        {isRegister && (
          <form action="/api/register" method="POST" className="space-y-4">
            <input
              type="text"
              name="fullname"
              placeholder="Full Name"
              className="w-full border px-4 py-2 rounded-lg"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border px-4 py-2 rounded-lg"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full border px-4 py-2 rounded-lg"
              required
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-type Password"
              className="w-full border px-4 py-2 rounded-lg"
              required
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition cursor-pointer"
            >
              Create Account
            </button>
          </form>
        )}

        {/* Switch Login/Register */}
        <div className="text-center">
          {isRegister ? (
            <p>
              Already have an account?{" "}
              <button
                onClick={() => setIsRegister(false)}
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Sign In
              </button>
            </p>
          ) : (
            <p>
              Don’t have an account?{" "}
              <button
                onClick={() => setIsRegister(true)}
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Register
              </button>
            </p>
          )}
        </div>

        {/* Social Sign-in */}
        <OauthSignIn />
      </div>
    </div>
  );
}
