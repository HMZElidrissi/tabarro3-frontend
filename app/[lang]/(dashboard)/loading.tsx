export default function DashboardLoading() {
  const shimmer =
    "animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200";
  return (
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
  );
}
