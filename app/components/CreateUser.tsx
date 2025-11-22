"use client";

import React, { useState } from "react";
import axios from "axios";
import { config } from "../config/environmentConfig";

type Props = {
  setIsRegister: (value: boolean) => void;
};

const CreateUser = ({ setIsRegister }: Props) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = e.target as HTMLFormElement;
    const fullname = (form.fullname as HTMLInputElement).value;
    const email = (form.email as HTMLInputElement).value;
    const password = (form.password as HTMLInputElement).value;
    const confirmPassword = (form.confirmPassword as HTMLInputElement).value;

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        `${config.apiBaseUrl}/api/user/create-user`,
        {
          fullname,
          email,
          password,
        }
      );

      setMessage(res.data.message);
      setIsRegister(false);
      console.log("Backend response:", res.data);
    } catch (error: any) {
      console.log("Error:", error);
      setError(error.response?.data?.error || "Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
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
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition cursor-pointer"
        >
          {loading ? "Creating..." : "Create Account"}
        </button>
      </form>

      {error && (
        <p className="text-center text-sm text-red-500 mt-2">{message}</p>
      )}
      {message && (
        <p className="text-center text-sm text-green-500 mt-2">{message}</p>
      )}
    </>
  );
};

export default CreateUser;
