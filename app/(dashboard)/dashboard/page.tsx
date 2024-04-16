"use client";
import { useSession } from "next-auth/react";
import OrganizationStats from "@/app/ui/stats/organization-stats";
import AdminStats from "@/app/ui/stats/admin-stats";

const Page = () => {
  const { data: session } = useSession();

  return (
    <div className="container mx-auto px-6 md:px-12 xl:px-24">
      <p className="text-2xl font-bold text-center my-6 text-gray-700">
        Welcome back, {session?.user?.name} 👋
      </p>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {session?.user?.role === 1 && <AdminStats />}
        {session?.user?.role === 2 && <OrganizationStats />}
      </dl>
    </div>
  );
};

export default Page;
