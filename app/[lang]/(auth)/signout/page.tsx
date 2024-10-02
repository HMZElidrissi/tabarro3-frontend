"use client";
import { signOut } from "next-auth/react";
import Image from "next/image";
import axiosClient from "@/app/lib/axiosClient";

const SignOutPage = () => {
  const handleSignout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axiosClient.post("/logout");
    await signOut({
      callbackUrl: "/",
    });
  };

  return (
    <>
      <div className="h-screen">
        <div className="min-h-full flex flex-col justify-center py-10 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <Image
              className="mx-auto"
              width={200}
              height={200}
              src="/logo.svg"
              alt="tabarro3"
            />
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form
                className="space-y-6"
                method="post"
                action="/api/auth/signout"
                onSubmit={handleSignout}
              >
                <div>
                  <div className="text-center mb-4">
                    <p className="text-gray-600 font-medium">
                      Are you sure you want to sign out?
                    </p>
                  </div>

                  <button type="submit" className="submit-button">
                    Sign out
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignOutPage;
