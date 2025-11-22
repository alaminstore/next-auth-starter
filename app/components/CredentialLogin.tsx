import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { doCredentialLogin } from "../actions/authAction";

const CredentialLogin = () => {
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
  );
};

export default CredentialLogin;
