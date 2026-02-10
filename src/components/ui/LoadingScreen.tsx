import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background blueprint-grid-intense overflow-hidden">
      {/* Custom Animations Style */}
      <style>
        {`
          @keyframes bk-pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.8; }
          }
          @keyframes bk-spin {
            0% { transform: rotate(45deg); }
            50% { transform: rotate(55deg); }
            100% { transform: rotate(45deg); }
          }
          @keyframes bk-float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          @keyframes bk-bounce-custom {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes bk-scale-pulse {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.5); opacity: 0.3; }
          }
          .animate-bk-pulse { animation: bk-pulse 2s ease-in-out infinite; }
          .animate-bk-spin { animation: bk-spin 10s ease-in-out infinite; }
          .animate-bk-float { animation: bk-float 4s ease-in-out infinite; }
          .animate-bk-bounce { animation: bk-bounce-custom 4s ease-in-out infinite; }
          .animate-bk-scale { animation: bk-scale-pulse 2s ease-in-out infinite; }
        `}
      </style>

      {/* Animated geometric accents (Hero replicas) */}
      <div className="absolute top-20 right-10 w-40 h-40 border border-primary/20 rotate-45 hidden lg:block animate-bk-spin" />
      <div className="absolute top-28 left-10 w-24 h-24 border border-primary/75 hidden md:block animate-bk-float" />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary rounded-full opacity-60 lg:opacity-100 animate-bk-scale" />
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-accent rounded-full opacity-60 lg:opacity-100 animate-bk-bounce" />

      {/* Decorative vertical line */}
      <div className="absolute right-6 lg:right-12 top-32 bottom-32 w-px bg-primary/20 hidden md:block" />

      {/* Center Logo Loader */}
      <div className="relative flex flex-col items-center gap-4 animate-bk-pulse">
        <div className="w-20 h-20 border-4 border-primary flex items-center justify-center bg-background shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]">
          <span className="font-mono font-bold text-2xl tracking-tighter text-foreground">
            BK
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary/60 mb-1">
            Initializing
          </span>
          <div className="w-32 h-0.5 bg-primary/10 relative overflow-hidden">
            <div
              className="absolute inset-0 bg-primary w-1/2 animate-[shimmer_2s_infinite_linear]"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                backgroundSize: "200% 100%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
