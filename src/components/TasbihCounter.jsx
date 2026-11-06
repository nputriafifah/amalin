import React, { useState } from 'react';
import { RotateCcw, Volume2, VolumeX, Sparkles, Check } from 'lucide-react';

export default function TasbihCounter({ target = 33, label = "Tasbih" }) {
  const [count, setCount] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Play subtle sound using Web Audio API
  const playClickSound = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.08);
    } catch {
      // AudioContext may be blocked or unsupported
    }
  };

  const handleIncrement = () => {
    if (count < target) {
      const nextCount = count + 1;
      setCount(nextCount);
      playClickSound();

      // Trigger mobile vibration if available
      if (typeof window !== 'undefined' && 'vibrate' in navigator) {
        if (nextCount === target) {
          navigator.vibrate([80, 50, 100]);
        } else {
          navigator.vibrate(25);
        }
      }
    }
  };

  const handleReset = (e) => {
    e.stopPropagation();
    setCount(0);
  };

  const progress = Math.min(100, Math.round((count / target) * 100));
  const isFinished = count >= target;

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50/50 dark:from-slate-900 dark:to-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 rounded-2xl p-4 md:p-5 my-4 select-none transition-all shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
            Digital Tasbih ({label})
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSoundEnabled(prev => !prev)}
            className="p-1.5 rounded-lg text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-300 hover:bg-emerald-100/50 dark:hover:bg-emerald-900/40 transition-colors"
            title={soundEnabled ? "Nonaktifkan Suara" : "Aktifkan Suara"}
            type="button"
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-xs px-2 py-1 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-emerald-100/60 dark:hover:bg-emerald-900/40 transition-colors"
            type="button"
            title="Reset Hitungan"
          >
            <RotateCcw size={14} />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Main Touch Counter Box */}
      <div
        onClick={handleIncrement}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            handleIncrement();
          }
        }}
        className={`relative overflow-hidden cursor-pointer rounded-2xl border transition-all text-center p-5 flex flex-col items-center justify-center min-h-[140px] ${
          isFinished
            ? 'bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-600/20'
            : 'bg-white dark:bg-slate-800/90 border-emerald-100 dark:border-slate-700 hover:border-emerald-400 dark:hover:border-emerald-600 active:scale-[0.98]'
        }`}
      >
        {/* Progress Background bar on bottom */}
        <div
          className="absolute bottom-0 left-0 h-1.5 bg-emerald-500 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />

        {isFinished ? (
          <div className="flex flex-col items-center animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-2">
              <Check className="w-7 h-7 text-white" />
            </div>
            <p className="text-xl font-bold">Alhamdulillah Selesai!</p>
            <p className="text-xs text-white/90 mt-1">
              Target {target}x telah terpenuhi. Klik Reset untuk mengulang.
            </p>
          </div>
        ) : (
          <>
            <div className="text-4xl md:text-5xl font-black font-mono tracking-tight text-emerald-900 dark:text-emerald-100">
              {count}
              <span className="text-base md:text-lg font-normal text-slate-400 dark:text-slate-500 ml-1">
                / {target}
              </span>
            </div>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-2 flex items-center gap-1.5">
              <Sparkles size={13} className="text-emerald-500" />
              Ketuk di sini atau spasi keyboard untuk menghitung
            </p>
          </>
        )}
      </div>
    </div>
  );
}
