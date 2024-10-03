const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function PageSkeleton() {
  return (
    <div className="bg-red-500 min-h-screen p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div className={`h-8 w-24 bg-red-400 rounded ${shimmer}`} />
        <div className="flex space-x-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`h-6 w-20 bg-red-400 rounded ${shimmer}`} />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="bg-red-400 p-8 rounded-lg mb-8">
        {/* Logo and title */}
        <div className="flex justify-center items-center mb-6">
          <div className={`h-16 w-16 bg-red-300 rounded-full ${shimmer}`} />
          <div className={`h-8 w-48 bg-red-300 ml-4 rounded ${shimmer}`} />
        </div>

        {/* Description */}
        <div className={`h-20 w-full bg-red-300 rounded mb-6 ${shimmer}`} />

        {/* Image placeholder */}
        <div className={`h-64 w-full bg-red-300 rounded ${shimmer}`} />
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
