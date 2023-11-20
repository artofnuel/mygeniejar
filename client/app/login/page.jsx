import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../asset/mgj.svg";

const page = () => {
  return (
    <main className="bg-bkg w-full h-[calc(100vh-92px)] flex justify-center items-center">
      <section className="w-11/12 lg:w-[520px] h-full lg:h-[520px] lg:bg-white lg:rounded-[30px] p-4 lg:p-8 flex flex-col justify-evenly gap-5 lg:shadow-md">
        <div className="">
          <div className="w-full flex justify-center items-center">
            <Image
              src={Logo}
              width={200}
              height={200}
              alt="mygeniejar-logo"
              className="w-[100px] aspect-square"
            />
          </div>
          <div className="w-full flex flex-col gap-2 justify-center items-center">
            <h1 className="font-medium text-2xl">Welcome to Mygeniejar</h1>
            <p className="">Sign into your account to continue</p>
          </div>
        </div>
        <form
          action=""
          className="w-full h-full flex flex-col justify-evenly gap-5"
        >
          <div className="space-y-3">
            <input
              type="email"
              name=""
              id=""
              required
              placeholder="Email Address"
              className="w-full p-4 rounded-md bg-[#CFE5F2] border border-[#282717] placeholder:text-[#959595] outline-none"
            />
            <input
              type="password"
              name=""
              id=""
              required
              placeholder="Enter password"
              className="w-full p-4 rounded-md bg-[#CFE5F2] border border-[#282717] placeholder:text-[#959595] outline-none"
            />

            <div className="w-full flex flex-row-reverse justify-between">
              <Link href="forgotpassword">
                <p>Forgot Password?</p>
              </Link>
              <span className="flex gap-3 mt-5 items-center">
                <input type="checkbox" name="" id="" className="w-4 h-4 " />
                <p>Remember me</p>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="w-full p-4 rounded-full bg-[#646464] text-white"
            >
              Continue
            </button>
            <div className="flex gap-2 justify-center items-center text-[#264354] font-normal text-sm opacity-50">
              <p>Don't have an account?</p>
              <Link href="createaccount">Create Account</Link>{" "}
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default page;
