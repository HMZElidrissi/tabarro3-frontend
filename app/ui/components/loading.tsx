import { UsersIcon, BuildingIcon, CalendarCheckIcon } from "lucide-react";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function BloodRequestsSkeleton() {
  return (
    <div className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 animate-pulse">
      <div className="w-full p-6 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="h-4 bg-gray-200 rounded w-24"></div>
          <div className="h-6 bg-gray-200 rounded-full w-16"></div>
        </div>
        <div className="space-y-3">
          <div className="flex items-center">
            <div className="h-4 w-4 bg-gray-200 rounded mr-2"></div>
            <div className="h-4 bg-gray-200 rounded w-32"></div>
          </div>
          <div className="flex items-center">
            <div className="h-4 w-4 bg-gray-200 rounded mr-2"></div>
            <div className="h-4 bg-gray-200 rounded w-48"></div>
          </div>
          <div className="h-16 bg-gray-200 rounded w-full"></div>
          <div className="flex items-center">
            <div className="h-4 w-4 bg-gray-200 rounded mr-2"></div>
            <div className="h-4 bg-gray-200 rounded w-36"></div>
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="h-8 bg-gray-200 rounded w-full"></div>
      </div>
    </div>
  );
}

export function CampaignsSkeleton() {
  return (
    <div className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200 animate-pulse">
      <div className="w-full p-6 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="h-4 bg-gray-200 rounded w-48"></div>
        </div>
        <div className="space-y-3">
          <div className="h-16 bg-gray-200 rounded w-full"></div>

          <div className="flex items-center">
            <div className="h-4 w-4 bg-gray-200 rounded mr-2"></div>
            <div className="h-4 bg-gray-200 rounded w-32"></div>
          </div>

          <div className="flex items-center">
            <div className="h-4 w-4 bg-gray-200 rounded mr-2"></div>
            <div className="h-4 bg-gray-200 rounded w-24"></div>
          </div>

          <div className="flex items-center">
            <div className="h-4 w-4 bg-gray-200 rounded mr-2"></div>
            <div className="h-4 bg-gray-200 rounded w-36"></div>
          </div>

          <div className="flex items-center">
            <div className="h-4 w-4 bg-gray-200 rounded mr-2"></div>
            <div className="h-4 bg-gray-200 rounded w-40"></div>
          </div>

          <div className="flex items-center">
            <div className="h-4 w-4 bg-gray-200 rounded mr-2"></div>
            <div className="h-4 bg-gray-200 rounded w-32"></div>
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="h-10 bg-gray-200 rounded w-full"></div>
      </div>
    </div>
  );
}

export function PageSkeleton() {
  return (
    <div className="bg-gray-50 min-h-screen p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className={`h-8 w-24 bg-gray-200 rounded ${shimmer}`} />
        <div className="flex space-x-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`h-6 w-20 bg-gray-200 rounded ${shimmer}`} />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
        {/* Logo and title */}
        <div className="flex justify-center items-center mb-8">
          <div className={`h-20 w-20 bg-gray-200 rounded-full ${shimmer}`} />
          <div className={`h-10 w-56 bg-gray-200 ml-6 rounded ${shimmer}`} />
        </div>

        {/* Description */}
        <div className="space-y-4 mb-8">
          <div className={`h-4 w-3/4 bg-gray-200 rounded ${shimmer}`} />
          <div className={`h-4 w-2/3 bg-gray-200 rounded ${shimmer}`} />
          <div className={`h-4 w-1/2 bg-gray-200 rounded ${shimmer}`} />
        </div>

        {/* Image placeholder */}
        <div className={`h-[400px] w-full bg-gray-200 rounded-lg ${shimmer}`} />
      </div>
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar skeleton */}
      <div className="hidden md:flex md:flex-col md:w-64 md:bg-white md:border-r">
        <div className={`h-16 bg-gray-200 ${shimmer}`} />
        <div className="flex-1 p-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`h-8 bg-gray-200 mb-4 rounded ${shimmer}`}
            />
          ))}
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Header skeleton */}
        <header
          className={`h-16 bg-white border-b flex items-center justify-between px-4 ${shimmer}`}
        >
          <div className="w-48 h-8 bg-gray-200 rounded" />
          <div className="w-10 h-10 bg-gray-200 rounded-full" />
        </header>

        {/* Main content skeleton */}
        <main className="flex-1 p-6">
          <div className={`h-8 bg-gray-200 w-1/4 mb-6 ${shimmer}`} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`h-40 bg-white rounded-lg shadow ${shimmer}`}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export function TableSkeleton() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {[...Array(6)].map((_, i) => (
              <th
                key={i}
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                <div className={`h-4 w-24 bg-gray-200 rounded ${shimmer}`} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(5)].map((_, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              {[...Array(6)].map((_, j) => (
                <td key={j} className="px-6 py-4 whitespace-nowrap">
                  <div className={`h-4 w-24 bg-gray-200 rounded ${shimmer}`} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function StatsSkeleton() {
  const StatCard = ({ Icon }: { Icon: React.ElementType }) => (
    <div
      className={`relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden ${shimmer}`}
    >
      <dt>
        <div className="absolute bg-gray-200 rounded-md p-3">
          <Icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
        </div>
        <div className="ml-16 h-4 w-36 bg-gray-200 rounded" />
      </dt>
      <dd className="ml-16 mt-6">
        <div className="h-8 w-24 bg-gray-200 rounded" />
      </dd>
    </div>
  );

  return (
    <>
      <StatCard Icon={UsersIcon} />
      <StatCard Icon={BuildingIcon} />
      <StatCard Icon={CalendarCheckIcon} />
    </>
  );
}
