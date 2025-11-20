import Image from "next/image";
import LoginForm from "./components/LoginForm";
import AuthPage from "./home/authPage/AuthPage";

export default function Home() {
  return (
    <>
      {/* <div className="flex flex-col justify-center items-center m-4">
        <h1 className="text-3xl my-3">Hey, it is time to Sign In</h1>
        <LoginForm />
      </div> */}
      <LoginForm />
      <AuthPage />
    </>
  );
}
