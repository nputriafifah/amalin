import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2, RotateCcw, Volume2, Sparkles, BookOpen } from 'lucide-react';
import { useApp } from '../context/AppContext';
import TasbihCounter from './TasbihCounter';

export default function GuidedFlowModal({ isOpen, onClose, sholatData }) {
  const { getArabicFontSizeClass, showLatin, showTranslation } = useApp();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // Reset step when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentStepIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !sholatData || !sholatData.steps) return null;

  const steps = sholatData.steps;
  const currentStep = steps[currentStepIndex];
  const progressPercent = Math.round(((currentStepIndex + 1) / steps.length) * 100);
  const isLastStep = currentStepIndex === steps.length - 1;

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl max-h-[92vh] flex flex-col bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
        {/* Top Header & Progress */}
        <div className="border-b border-slate-100 dark:border-slate-800 p-4 md:p-5 bg-slate-50 dark:bg-slate-900/90 flex-shrink-0">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Mode Terpandu • {sholatData.name}
              </span>
              <h2 className="text-sm md:text-base font-semibold text-slate-900 dark:text-slate-100 line-clamp-1">
                Langkah {currentStepIndex + 1} dari {steps.length}: {currentStep.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
              title="Tutup Mode Terpandu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
            <div
              className="bg-emerald-500 h-full transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Scrollable Step Body */}
        <div className="flex-1 overflow-y-auto p-5 md:p-7 space-y-6">
          {/* Step Category / Note */}
          {currentStep.note && (
            <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/40 text-xs md:text-sm text-emerald-900 dark:text-emerald-300">
              <span className="font-bold">Panduan:</span> {currentStep.note}
            </div>
          )}

          {/* Multi subItems */}
          {currentStep.subItems && (
            <div className="space-y-4">
              {currentStep.subItems.map((sub, sIdx) => (
                <div
                  key={sIdx}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                      {sub.name}
                    </span>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-semibold font-mono">
                      {sub.target}x
                    </span>
                  </div>
                  <p className={`font-arabic text-right leading-loose text-slate-900 dark:text-slate-100 my-2 ${getArabicFontSizeClass()}`} dir="rtl">
                    {sub.arabic}
                  </p>
                  {showLatin && sub.latin && (
                    <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300 italic mt-1">
                      {sub.latin}
                    </p>
                  )}
                  {showTranslation && sub.translation && (
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      "{sub.translation}"
                    </p>
                  )}
                  <TasbihCounter target={sub.target} label={sub.name} />
                </div>
              ))}
            </div>
          )}

          {/* Single Arabic reading */}
          {currentStep.arabic && !currentStep.subItems && (
            <div className="p-5 rounded-2xl bg-slate-50/60 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
              <p
                className={`font-arabic text-right text-slate-900 dark:text-slate-100 whitespace-pre-line ${getArabicFontSizeClass()}`}
                dir="rtl"
              >
                {currentStep.arabic}
              </p>
            </div>
          )}

          {/* Items if multi-surah */}
          {currentStep.items && (
            <div className="space-y-4">
              {currentStep.items.map((it, iIdx) => (
                <div key={iIdx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 block mb-2">
                    {it.name}
                  </span>
                  <p className={`font-arabic text-right leading-loose text-slate-900 dark:text-slate-100 ${getArabicFontSizeClass()}`} dir="rtl">
                    {it.arabic}
                  </p>
                  {showLatin && it.latin && (
                    <p className="text-sm text-emerald-700 dark:text-emerald-300 italic mt-2">
                      {it.latin}
                    </p>
                  )}
                  {showTranslation && it.translation && (
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      "{it.translation}"
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Latin */}
          {showLatin && currentStep.latin && !currentStep.subItems && (
            <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 block mb-1">
                Latin
              </span>
              <p className="text-sm md:text-base text-emerald-950 dark:text-emerald-200/90 leading-relaxed italic whitespace-pre-line">
                {currentStep.latin}
              </p>
            </div>
          )}

          {/* Translation */}
          {showTranslation && currentStep.translation && !currentStep.subItems && (
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                Arti / Terjemahan
              </span>
              <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                "{currentStep.translation}"
              </p>
            </div>
          )}

          {/* Target Counter */}
          {currentStep.targetCount && !currentStep.subItems && (
            <TasbihCounter target={currentStep.targetCount} label={`${currentStep.title} (${currentStep.targetCount}x)`} />
          )}

          {/* Keutamaan */}
          {currentStep.keutamaan && (
            <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/30">
              <div className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-xs md:text-sm text-amber-950 dark:text-amber-200/90 leading-relaxed">
                  <span className="font-bold">Keutamaan: </span>
                  {currentStep.keutamaan}
                </p>
              </div>
            </div>
          )}

          {/* Dalil */}
          {currentStep.dalil && (
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
              <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>{currentStep.dalil}</span>
            </div>
          )}
        </div>

        {/* Bottom Navigation Buttons */}
        <div className="p-4 md:p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-900/80 flex items-center justify-between gap-3 flex-shrink-0">
          <button
            onClick={handlePrev}
            disabled={currentStepIndex === 0}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              currentStepIndex === 0
                ? 'opacity-40 cursor-not-allowed text-slate-400'
                : 'text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800'
            }`}
          >
            <ChevronLeft size={18} />
            <span>Sebelumnya</span>
          </button>

          <span className="text-xs font-mono text-slate-400 dark:text-slate-500 hidden sm:inline">
            {currentStepIndex + 1} / {steps.length}
          </span>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20 active:scale-[0.98] transition-all"
          >
            {isLastStep ? (
              <>
                <CheckCircle2 size={18} />
                <span>Selesai Amalan</span>
              </>
            ) : (
              <>
                <span>Lanjut</span>
                <ChevronRight size={18} />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
