import React from "react";
import { doLogOut } from "../actions/authAction";

const Logout = () => {
  return (
    <div>
      <form action={doLogOut}>
        <button className="bg-blue-400 text-white p-1 cursor-pointer" type="submit">
          LogOut
        </button>
      </form>
    </div>
  );
};

export default Logout;
