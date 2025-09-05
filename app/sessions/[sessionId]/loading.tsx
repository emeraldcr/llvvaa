export default function SessionLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb Skeleton */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2">
            <div className="h-4 bg-white/10 rounded w-16 animate-pulse"></div>
            <div className="h-4 w-4 bg-white/10 rounded animate-pulse"></div>
            <div className="h-4 bg-white/10 rounded w-20 animate-pulse"></div>
            <div className="h-4 w-4 bg-white/10 rounded animate-pulse"></div>
            <div className="h-4 bg-white/10 rounded w-24 animate-pulse"></div>
          </div>
        </nav>

        {/* Main Content Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Session Content Skeleton */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
              {/* Header Skeleton */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-8 bg-white/10 rounded w-2/3 animate-pulse"></div>
                  <div className="h-6 bg-white/10 rounded w-20 animate-pulse"></div>
                </div>
                <div className="h-6 bg-white/10 rounded w-full mb-2 animate-pulse"></div>
                <div className="h-6 bg-white/10 rounded w-4/5 animate-pulse"></div>
                
                <div className="flex items-center gap-6 mt-6 mb-6">
                  <div className="h-5 bg-white/10 rounded w-24 animate-pulse"></div>
                  <div className="h-5 bg-white/10 rounded w-28 animate-pulse"></div>
                </div>
                
                {/* Topics Skeleton */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-6 bg-white/10 rounded w-16 animate-pulse"></div>
                  ))}
                </div>
              </div>
              
              {/* Content Sections Skeleton */}
              <div className="space-y-6 mb-8">
                <div className="h-6 bg-white/10 rounded w-48 animate-pulse"></div>
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-white/10 rounded-full animate-pulse mr-4"></div>
                      <div className="flex-grow space-y-2">
                        <div className="h-4 bg-white/10 rounded w-full animate-pulse"></div>
                        <div className="h-4 bg-white/10 rounded w-4/5 animate-pulse"></div>
                        <div className="h-4 bg-white/10 rounded w-3/5 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="lg:col-span-1 space-y-6">
            {/* Navigation Skeleton */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="h-4 bg-white/10 rounded w-24 animate-pulse"></div>
                <div className="flex space-x-2">
                  <div className="h-8 bg-white/10 rounded w-20 animate-pulse"></div>
                  <div className="h-8 bg-white/10 rounded w-20 animate-pulse"></div>
                </div>
              </div>
              <div className="h-2 bg-white/10 rounded animate-pulse"></div>
            </div>
            
            {/* Actions Skeleton */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="h-5 bg-white/10 rounded w-32 mb-4 animate-pulse"></div>
              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-8 bg-white/10 rounded animate-pulse"></div>
                ))}
              </div>
            </div>

            {/* Info Skeleton */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
              <div className="h-5 bg-white/10 rounded w-28 mb-4 animate-pulse"></div>
              <div className="space-y-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="flex justify-between">
                    <div className="h-4 bg-white/10 rounded w-16 animate-pulse"></div>
                    <div className="h-4 bg-white/10 rounded w-12 animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}