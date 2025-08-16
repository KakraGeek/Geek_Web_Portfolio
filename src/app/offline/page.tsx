'use client';

export default function OfflinePage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6 text-center bg-[#0B1220] text-white">
      <div className="max-w-md">
        <h1 className="text-2xl font-semibold text-[#1E90FF] mb-4">You&apos;re offline</h1>
        <p className="text-sm opacity-80 leading-relaxed">
          Content will appear once you&apos;re back online. Cached pages may still be available.
        </p>
        <div className="mt-6">
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-[#1E90FF] text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    </main>
  );
}
