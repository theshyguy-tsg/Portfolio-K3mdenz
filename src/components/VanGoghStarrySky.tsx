import React, { useState } from 'react';
import { Sparkles, Moon, Sun } from 'lucide-react';

interface VanGoghStarrySkyProps {
  currentTheme: string;
}

export const VanGoghStarrySky: React.FC<VanGoghStarrySkyProps> = ({ currentTheme }) => {
  const [clickedStarId, setClickedStarId] = useState<number | null>(null);

  if (currentTheme !== 'vangogh') {
    return null;
  }

  // Generate fixed star positions with varied sizes and animation delays
  const stars = [
    { id: 1, top: '12%', left: '8%', size: 'w-8 h-8', delay: '0s', floatDelay: '0s', color: 'from-amber-200 to-yellow-400' },
    { id: 2, top: '22%', left: '25%', size: 'w-10 h-10', delay: '0.8s', floatDelay: '1.2s', color: 'from-yellow-300 to-amber-500' },
    { id: 3, top: '8%', left: '45%', size: 'w-7 h-7', delay: '1.5s', floatDelay: '0.5s', color: 'from-sky-200 to-amber-300' },
    { id: 4, top: '35%', left: '15%', size: 'w-9 h-9', delay: '2.1s', floatDelay: '2s', color: 'from-amber-100 to-yellow-300' },
    { id: 5, top: '18%', left: '62%', size: 'w-11 h-11', delay: '0.4s', floatDelay: '1.8s', color: 'from-yellow-200 to-amber-400' },
    { id: 6, top: '28%', left: '78%', size: 'w-8 h-8', delay: '1.2s', floatDelay: '0.9s', color: 'from-amber-300 to-yellow-500' },
    { id: 7, top: '48%', left: '40%', size: 'w-10 h-10', delay: '1.8s', floatDelay: '2.5s', color: 'from-sky-300 to-yellow-300' },
    { id: 8, top: '60%', left: '88%', size: 'w-9 h-9', delay: '2.5s', floatDelay: '1s', color: 'from-yellow-100 to-amber-300' },
    { id: 9, top: '72%', left: '12%', size: 'w-8 h-8', delay: '0.9s', floatDelay: '3s', color: 'from-amber-200 to-yellow-400' },
    { id: 10, top: '82%', left: '55%', size: 'w-7 h-7', delay: '1.1s', floatDelay: '1.5s', color: 'from-yellow-300 to-amber-500' },
  ];

  const handleStarClick = (id: number) => {
    setClickedStarId(id);
    setTimeout(() => setClickedStarId(null), 1200);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. Golden Swirling Nebulae & Swirl Waves */}
      <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-tr from-sky-600/20 via-yellow-400/15 to-indigo-900/20 blur-3xl animate-starry-swirl opacity-80" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full bg-gradient-to-bl from-amber-400/20 via-blue-700/15 to-sky-500/20 blur-3xl animate-starry-swirl-rev opacity-70" />
      <div className="absolute top-[30%] left-[25%] w-[50vw] h-[30vw] bg-gradient-to-r from-blue-600/10 via-amber-300/15 to-cyan-400/10 rounded-full blur-2xl animate-star-float opacity-60" />

      {/* 2. Van Gogh Golden Crescent Moon in Top Right */}
      <div className="absolute top-6 right-8 md:top-12 md:right-16 pointer-events-auto cursor-pointer group">
        {/* Multilayered Halo Glow */}
        <div className="absolute -inset-8 rounded-full bg-yellow-400/20 blur-2xl animate-moon-pulse" />
        <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-yellow-300/30 via-amber-400/20 to-sky-400/30 blur-xl animate-pulse" />
        
        {/* Crescent Moon Container */}
        <div className="relative p-3 rounded-full bg-gradient-to-br from-yellow-200 via-amber-300 to-yellow-500 shadow-[0_0_50px_rgba(250,204,21,0.9)] animate-moon-pulse border-2 border-yellow-200/80">
          <Moon className="w-10 h-10 md:w-14 md:h-14 text-slate-950 fill-yellow-100 group-hover:scale-110 transition-transform duration-300" />
          <Sun className="w-4 h-4 text-yellow-100 absolute top-1 right-1 animate-spin" style={{ animationDuration: '12s' }} />
        </div>
      </div>

      {/* 3. Meteor Streaks */}
      <div className="absolute top-[15%] right-[20%] w-32 h-[2px] bg-gradient-to-l from-yellow-200 via-amber-300 to-transparent rotate-[-35deg] animate-meteor-1 opacity-70" />
      <div className="absolute top-[40%] right-[35%] w-48 h-[2px] bg-gradient-to-l from-sky-200 via-yellow-200 to-transparent rotate-[-30deg] animate-meteor-2 opacity-60" />

      {/* 4. Dynamic Van Gogh Stars with Halo Rings */}
      {stars.map((s) => {
        const isClicked = clickedStarId === s.id;
        return (
          <div
            key={s.id}
            onClick={() => handleStarClick(s.id)}
            style={{ top: s.top, left: s.left }}
            className="absolute pointer-events-auto cursor-pointer group transition-all duration-300"
          >
            <div
              className={`relative flex items-center justify-center animate-star-float`}
              style={{ animationDelay: s.floatDelay }}
            >
              {/* Outer Oil-Paint Halo Rings */}
              <div
                className={`absolute -inset-3 rounded-full bg-gradient-to-r ${s.color} opacity-30 blur-md group-hover:opacity-80 transition-opacity animate-star-twinkle`}
                style={{ animationDelay: s.delay }}
              />
              <div
                className="absolute -inset-1.5 rounded-full border border-yellow-300/40 animate-ping opacity-20"
                style={{ animationDuration: '4s', animationDelay: s.delay }}
              />

              {/* Star Core */}
              <div
                className={`relative ${s.size} rounded-full bg-gradient-to-br ${s.color} shadow-[0_0_20px_rgba(253,224,71,0.9)] flex items-center justify-center border border-white/80 animate-star-twinkle group-hover:scale-125 transition-transform`}
                style={{ animationDelay: s.delay }}
              >
                <Sparkles className="w-1/2 h-1/2 text-slate-950 fill-yellow-100" />
              </div>

              {/* Sparkle Explosion effect on Click */}
              {isClicked && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-yellow-300/40 animate-ping" />
                  <Sparkles className="w-8 h-8 text-yellow-200 animate-spin absolute" />
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* 5. Cypress Tree Silhouette Background Decorative Accents */}
      <div className="absolute bottom-0 left-4 w-16 md:w-28 h-48 md:h-80 bg-gradient-to-t from-[#02050c] via-[#051126] to-transparent opacity-80 rounded-t-full blur-[1px]" />
      <div className="absolute bottom-0 right-8 w-12 md:w-20 h-36 md:h-56 bg-gradient-to-t from-[#02050c] via-[#051126] to-transparent opacity-70 rounded-t-full blur-[1px]" />
    </div>
  );
};
