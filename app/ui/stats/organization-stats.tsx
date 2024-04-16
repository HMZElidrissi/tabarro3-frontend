import { CalendarCheck, TrendingDown, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchStats } from "@/app/lib/data";

interface OrganizationStatsProps {
  campaigns: number;
  most_participated_campaign: string;
  least_participated_campaign: string;
}

const OrganizationStats = () => {
  const [stats, setStats] = useState<OrganizationStatsProps>({
    campaigns: 0,
    most_participated_campaign: "",
    least_participated_campaign: "",
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
            <CalendarCheck className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <p className="ml-16 text-sm font-medium text-gray-500 truncate">
            Number of Campaigns
          </p>
        </dt>
        <dd className="ml-16 flex items-baseline">
          <p className="text-2xl font-semibold text-gray-900">
            {stats.campaigns}
          </p>
        </dd>
      </div>
      <div className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
        <dt>
          <div className="absolute bg-primary-500 rounded-md p-3">
            <TrendingUp className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <p className="ml-16 text-sm font-medium text-gray-500">
            Campaign with most participants
          </p>
        </dt>
        <dd className="ml-16 flex items-baseline">
          <p className="text-xl font-semibold text-gray-900">
            {stats.most_participated_campaign}
          </p>
        </dd>
      </div>
      <div className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
        <dt>
          <div className="absolute bg-primary-500 rounded-md p-3">
            <TrendingDown className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <p className="ml-16 text-sm font-medium text-gray-500">
            Campaign with least participants
          </p>
        </dt>
        <dd className="ml-16 flex items-baseline">
          <p className="text-xl font-semibold text-gray-900">
            {stats.least_participated_campaign}
          </p>
        </dd>
      </div>
    </>
  );
};

export default OrganizationStats;
