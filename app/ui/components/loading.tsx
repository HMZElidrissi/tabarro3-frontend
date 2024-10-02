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
