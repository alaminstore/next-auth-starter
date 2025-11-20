import React from "react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { auth } from "../auth";
import Logout from "../components/Logout";

const HomePage = async () => {
  const session = await auth();
  if (!session?.user) redirect("/");

  return (
    <div className="flex flex-col items-center m-4">
      <h1>Name: {session?.user?.name}</h1>
      <Image
        width={75}
        height={75}
        src={session?.user?.image}
        alt={session?.user?.name}
        className="rounded-full"
      />

      <div className="mt-5">
        <Logout />
      </div>
    </div>
  );
};

export default HomePage;
