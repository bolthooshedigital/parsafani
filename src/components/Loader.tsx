import { useEffect, useState } from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 500);
          return 100;
        }
        return p + 3;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  if (done) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink-900 transition-opacity duration-700 ${
        progress >= 100 ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative w-20 h-20 mb-8">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-400 to-cyan-400 animate-pulse-glow" />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-400 to-cyan-400 flex items-center justify-center">
          <span className="text-2xl font-black text-ink-900">PF</span>
        </div>
      </div>

      <div className="w-48 h-1 rounded-full bg-ink-700 overflow-hidden mb-4">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent-400 to-cyan-400 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-sm text-gray-500 font-medium">در حال بارگذاری...</p>
    </div>
  );
}
