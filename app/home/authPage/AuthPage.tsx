"use client";

import { doSocialLogin } from "@/app/actions/authAction";
import Image from "next/image";
import { useState } from "react";

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-center">
          {isRegister ? "Create an Account" : "Sign In"}
        </h2>

        {/* Login Form */}
        {!isRegister && (
          <form action="/api/login" method="POST" className="space-y-4">
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

        {/* Google Sign-in */}
        <form action={doSocialLogin}>
          <button
            type="submit"
            name="action"
            value="google"
            className="w-full border border-gray-300 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition cursor-pointer"
          >
            <Image
              width={100}
              height={100}
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
}
