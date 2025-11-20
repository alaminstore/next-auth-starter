import React from "react";
import { doSocialLogin } from "../actions/authAction";

const LoginForm = () => {
  return (
    <>
      <div>
        <form action={doSocialLogin}>
          <button
            className="bg-amber-200 p-2 rounded-md m-2 text-lg cursor-pointer"
            type="submit"
            name="action"
            value="google"
          >
            Sign In with Google
          </button>
          <button
            className="bg-black text-white p-2 rounded-md m-2 text-lg cursor-pointer"
            type="submit"
            name="action"
            value="github"
          >
            Sign In with Github
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
