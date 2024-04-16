"use client";
import { useSession } from "next-auth/react";

const Page = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {status === "loading" && <p>Loading...</p>}
      {status === "authenticated" && (
        <p>
          Welcome, {session.user?.name} You have role {session.user?.role}
        </p>
      )}
      {status === "unauthenticated" && <p>You are not signed in</p>}
    </div>
  );
};

export default Page;
