"use client";

import { useState } from "react";
import OauthSignIn from "../components/OauthSignIn";
import CredentialLogin from "../components/CredentialLogin";
import CreateUser from "../components/CreateUser";

export default function LoginPageClient() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-center">
          {isRegister ? "Create an Account" : "Sign In"}
        </h2>

        {/* Login Form */}
        {!isRegister && <CredentialLogin />}

        {/* Register Form */}
        {isRegister && <CreateUser setIsRegister={setIsRegister} />}

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
