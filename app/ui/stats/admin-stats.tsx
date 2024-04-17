import { UsersIcon } from "@heroicons/react/24/outline";
import { BuildingIcon, CalendarCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchStats } from "@/app/lib/data";

interface AdminStatsProps {
  participants: number;
  organizations: number;
  campaigns: number;
}

const AdminStats = () => {
  const [stats, setStats] = useState<AdminStatsProps>({
    participants: 0,
    organizations: 0,
    campaigns: 0,
  });
  useEffect(() => {
    fetchStats().then((data) => {
      setStats(data);
    });
  }, []);
  return (
    <>
      <div className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
        <dt>
          <div className="absolute bg-primary-500 rounded-md p-3">
            <UsersIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <p className="ml-16 text-sm font-medium text-gray-500 truncate">
            Number of Participants
          </p>
        </dt>
        <dd className="ml-16 flex items-baseline">
          <p className="text-2xl font-semibold text-gray-900">
            {stats.participants}
          </p>
        </dd>
      </div>
      <div className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
        <dt>
          <div className="absolute bg-primary-500 rounded-md p-3">
            <BuildingIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <p className="ml-16 text-sm font-medium text-gray-500 truncate">
            Number of Organizations
          </p>
        </dt>
        <dd className="ml-16 flex items-baseline">
          <p className="text-2xl font-semibold text-gray-900">
            {stats.organizations}
          </p>
        </dd>
      </div>
      <div className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
        <dt>
          <div className="absolute bg-primary-500 rounded-md p-3">
            <CalendarCheck className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <p className="ml-16 text-sm font-medium text-gray-500 truncate">
            Number of Campaigns
          </p>
        </dt>
        <dd className="ml-16 flex items-baseline">
          <p className="text-2xl font-semibold text-gray-900">
            {stats.organizations}
          </p>
        </dd>
      </div>
    </>
  );
};

export default AdminStats;
