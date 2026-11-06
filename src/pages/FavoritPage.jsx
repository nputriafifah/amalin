import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, Trash2, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function FavoritPage() {
  const { favorites, toggleFavorite } = useApp();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20 space-y-8 pt-6">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <div className="w-12 h-12 rounded-2xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 flex items-center justify-center mx-auto">
          <Bookmark size={24} className="fill-current" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Daftar Amalan Favorit
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Disimpan otomatis di browser perangkat Anda melalui LocalStorage, praktis dibuka kembali kapan saja tanpa perlu login.
        </p>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-8 space-y-4">
          <div className="text-4xl">❤️</div>
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
            Belum Ada Amalan yang Disimpan
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto">
            Klik ikon bookmark/favorit pada setiap sholat atau doa yang sering kamu amalkan (misal: Tahajud, Ayat Kursi, Doa Nabi Yunus).
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <Link
              to="/sholat/tahajud"
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-emerald-50 hover:text-emerald-600"
            >
              Lihat Sholat Tahajud
            </Link>
            <Link
              to="/doa-pilihan"
              className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700"
            >
              Jelajahi Doa Pilihan
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex justify-between items-center text-xs text-slate-500 px-1">
            <span>Tersimpan {favorites.length} amalan</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {favorites.map((fav) => (
              <div
                key={fav.id}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-emerald-500/50 shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400">
                      {fav.type === 'wajib' ? 'Sholat Wajib' : fav.type === 'sunnah' ? 'Sholat Sunnah' : 'Doa Pilihan'}
                    </span>

                    <button
                      onClick={() => toggleFavorite(fav)}
                      className="text-slate-400 hover:text-rose-500 p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      title="Hapus dari Favorit"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>

                  <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
                    {fav.title}
                  </h3>

                  {fav.subtitle && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                      {fav.subtitle}
                    </p>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  <Link
                    to={fav.path}
                    className="flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    <span>Buka Amalan</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
