import Image from "next/image";
import React from "react";
import { doSocialLogin } from "../actions/authAction";

const OauthSignIn = () => {
  return (
    <>
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

        <button
          type="submit"
          name="action"
          value="github"
          className="w-full mt-3 bg-[#24292F] text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-[#1f2428] transition cursor-pointer"
        >
          <Image
            width={100}
            height={100}
            src="https://www.svgrepo.com/show/512317/github-142.svg"
            alt="github"
            className="w-5 h-5 invert"
          />
          Sign in with GitHub
        </button>
      </form>
    </>
  );
};

export default OauthSignIn;
