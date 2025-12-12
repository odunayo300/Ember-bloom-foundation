import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const words = ['Hope', 'Strength', 'Support', 'Community', 'Empowerment'];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    // Progress animation
    const duration = 5000; // 5 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + increment;
        return next > 100 ? 100 : next;
      });
    }, interval);

    // Word cycling animation
    const wordTimer = setInterval(() => {
      setCurrentWord(prev => (prev + 1) % words.length);
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(wordTimer);
    };
  }, [words.length]);

  return (
    <div 
      className="fixed inset-0 bg-gradient-to-br from-primary to-primary/95 flex flex-col items-center justify-center z-50"
      style={{
        opacity: 1,
        transition: 'opacity 0.5s ease-out',
      }}
    >
      {/* Logo and Title */}
      <div className="text-center mb-12 px-4 max-w-sm md:max-w-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
          Ember Bloom Foundation
        </h1>
        <div className="h-8 overflow-hidden">
          <p 
            className="text-accent/90 text-base sm:text-lg transform transition-all duration-500 ease-out"
            style={{
              opacity: progress > 0 ? 1 : 0,
              transform: `translateY(${-currentWord * 2}rem)`
            }}
          >
            {words.map((word, i) => (
              <span key={i} className="block h-8">{word}</span>
            ))}
          </p>
        </div>
      </div>

      {/* Stylized loading animation */}
      <div className="relative w-[280px] sm:w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-8">
        <div 
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-accent to-accent/80 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
        </div>
      </div>

      {/* Loading message */}
      <div className="text-center">
        <p className="text-white/80 text-sm font-light tracking-wider">
          Creating positive change
        </p>
        <p className="text-accent text-base font-medium mt-2">
          No Woman should walk alone
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
}