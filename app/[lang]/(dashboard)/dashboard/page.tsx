"use client";

import React, { Suspense } from "react";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import axiosClient from "@/app/lib/axiosClient";

const OrganizationStats = React.lazy(
  () => import("@/app/ui/stats/organization-stats"),
);
const AdminStats = React.lazy(() => import("@/app/ui/stats/admin-stats"));

const fetcher = (url: string) => axiosClient.get(url).then((res) => res.data);

const Page = () => {
  const { data: session } = useSession();
  const { data: stats, error } = useSWR("/stats", fetcher);

  if (error) return <div>Failed to load stats</div>;
  if (!stats) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-6 md:px-12 xl:px-24">
      <p className="text-2xl font-bold text-center my-6 text-gray-700">
        Welcome back, {session?.user?.name} 👋
      </p>
      <Suspense fallback={<div>Loading stats...</div>}>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {session?.user?.role === 1 && <AdminStats stats={stats} />}
          {session?.user?.role === 2 && <OrganizationStats stats={stats} />}
        </dl>
      </Suspense>
    </div>
  );
};

export default Page;
