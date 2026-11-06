import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { sholatSunnahList } from '../data/sholatSunnah';

export default function SholatSunnahPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-20 space-y-10 pt-6">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800">
          Sholat Sunnah Muakkadah
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Panduan Amalan Sholat Sunnah
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Semua bacaan yang biasanya ingin kamu baca sesudah sholat sunnah sudah tersusun dalam satu halaman sesuai urutan, tanpa perlu mencari satu per satu.
        </p>
      </div>

      {/* Grid Sholat Sunnah */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sholatSunnahList.map((item) => (
          <Link
            key={item.id}
            to={`/sholat/${item.id}`}
            className="group relative bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-7 hover:border-blue-500 dark:hover:border-blue-500/60 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${item.badgeColor}`}>
                  {item.subtitle}
                </span>
                <span className="font-arabic text-2xl text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.arabicName}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {item.name}
              </h2>

              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5 font-medium">
                <Clock size={14} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span>{item.bestTime}</span>
              </p>

              <p className="text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                {item.description}
              </p>

              {/* Step Sequence Preview */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Langkah Amalan ({item.steps.length} Doa & Dzikir):
                </span>
                <div className="space-y-1.5">
                  {item.steps.slice(0, 4).map((st, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <span className="w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                        {sIdx + 1}
                      </span>
                      <span className="truncate">{st.title.replace(/^\d+\.\s*/, '')}</span>
                    </div>
                  ))}
                  {item.steps.length > 4 && (
                    <p className="text-[11px] text-blue-600 dark:text-blue-400 font-semibold pl-6">
                      +{item.steps.length - 4} amalan berikutnya...
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
              <span>Buka Amalan {item.name} Lengkap</span>
              <ArrowRight size={16} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
