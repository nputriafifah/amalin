import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🌙</span>
              <span className="font-extrabold text-xl text-slate-900 dark:text-white">
                Amalin<span className="text-emerald-500">.</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Panduan Amalan Setelah Sholat dalam Satu Tempat. Menyelesaikan masalah "nggak perlu bolak-balik cari doa di TikTok atau Google".
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400 font-medium">
              <ShieldCheck size={16} />
              <span>Mengacu pada Al-Qur'an dan Hadits Shahih / Ma'tsur</span>
            </div>
          </div>

          {/* Quick Nav Sholat */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3">
              Sholat Fardhu & Sunnah
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link to="/sholat-wajib" className="hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors">Semua Sholat Wajib</Link></li>
              <li><Link to="/sholat-sunnah" className="hover:text-emerald-600 dark:hover:text-emerald-400 font-medium transition-colors">Semua Sholat Sunnah</Link></li>
              <li><Link to="/sholat/subuh" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Sholat Subuh</Link></li>
              <li><Link to="/sholat/maghrib" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Sholat Maghrib</Link></li>
              <li><Link to="/sholat/tahajud" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Sholat Tahajud</Link></li>
              <li><Link to="/sholat/dhuha" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Sholat Dhuha</Link></li>
            </ul>
          </div>

          {/* Doa & Fitur */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 mb-3">
              Fitur & Pilihan
            </h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><Link to="/doa-pilihan" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Doa-Doa Pilihan</Link></li>
              <li><Link to="/favorit" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Daftar Favorit Saya</Link></li>
              <li><Link to="/tentang" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">Tentang Amalin</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="pt-8 border-t border-slate-100 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} Amalin. Dibuat dengan niat tulus & bermanfaat untuk umat.
          </p>
          <p className="flex items-center gap-1">
            Data tersimpan lokal di browser (tanpa perlu login)
          </p>
        </div>
      </div>
    </footer>
  );
}
