import React, { useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search, Moon, Sun, Clock, Sparkles, BookOpen, ChevronRight,
  Bookmark, CheckCircle, ArrowRight, ShieldCheck, Heart, Compass
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { sholatWajibList } from '../data/sholatWajib';
import { sholatSunnahList } from '../data/sholatSunnah';
import { doaPilihanList } from '../data/doaPilihan';
import DoaCard from '../components/DoaCard';

export default function Home() {
  const { setIsSearchOpen, openSearchWithQuery, isFavorite, toggleFavorite } = useApp();
  const navigate = useNavigate();

  // Suggest current prayer based on hour
  const currentRecommendation = useMemo(() => {
    const hour = new Date().getHours();
    if (hour >= 3 && hour < 6) return { id: 'subuh', name: 'Sholat Subuh', badge: 'Waktu Subuh' };
    if (hour >= 6 && hour < 11) return { id: 'dhuha', name: 'Sholat Dhuha', badge: 'Waktu Dhuha' };
    if (hour >= 11 && hour < 15) return { id: 'dzuhur', name: 'Sholat Dzuhur', badge: 'Waktu Dzuhur' };
    if (hour >= 15 && hour < 18) return { id: 'ashar', name: 'Sholat Ashar', badge: 'Waktu Ashar' };
    if (hour >= 18 && hour < 19) return { id: 'maghrib', name: 'Sholat Maghrib', badge: 'Waktu Maghrib' };
    if (hour >= 19 && hour < 23) return { id: 'isya', name: 'Sholat Isya', badge: 'Waktu Isya' };
    return { id: 'tahajud', name: 'Sholat Tahajud', badge: 'Waktu Qiyamul Lail' };
  }, []);

  return (
    <div className="space-y-16 md:space-y-24 pb-12">
      {/* Hero Section */}
      <section className="relative pt-6 md:pt-12 overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-gradient-to-tr from-emerald-500/10 via-teal-500/15 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto text-center px-4 space-y-6">
          {/* Top pill recommendation */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200/80 dark:border-emerald-800 text-xs font-semibold text-emerald-800 dark:text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Saat ini: {currentRecommendation.badge}</span>
            <span className="text-slate-400">•</span>
            <Link to={`/sholat/${currentRecommendation.id}`} className="hover:underline flex items-center gap-0.5 text-emerald-700 dark:text-emerald-400 font-bold">
              Buka {currentRecommendation.name} <ChevronRight size={12} />
            </Link>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Panduan Amalan Setelah Sholat <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 bg-clip-text text-transparent">
              Dalam Satu Tempat.
            </span>
          </h1>

          {/* Quick Search trigger box in Hero */}
          <div className="pt-2 max-w-xl mx-auto">
            <div
              onClick={() => setIsSearchOpen(true)}
              className="cursor-pointer flex items-center justify-between p-3.5 md:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-emerald-500 dark:hover:border-emerald-500 transition-all group"
            >
              <div className="flex items-center gap-3 text-slate-400">
                <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-normal">
                  Cari 
                </span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                Cari
              </span>
            </div>

            {/* Quick Keyword tags */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-medium">Populer:</span>
              {[
                { label: 'Tahajud', q: 'tahajud' },
                { label: 'Dhuha', q: 'dhuha' },
                { label: 'Rezeki', q: 'rezeki' },
                { label: 'Nabi Yunus', q: 'yunus' },
                { label: 'Ayat Kursi', q: 'kursi' },
                { label: 'Orang Tua', q: 'orang tua' }
              ].map(t => (
                <button
                  key={t.q}
                  type="button"
                  onClick={() => openSearchWithQuery(t.q)}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 hover:bg-emerald-100 hover:text-emerald-700 dark:hover:bg-emerald-950/60 dark:hover:text-emerald-300 transition-colors"
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* Section 1: Sholat Wajib */}
      <section id="sholat-wajib" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider mb-1">
              <span>🕌 Lima Waktu Fardhu</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Amalan Sholat Wajib
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Doa, dzikir, dan wirid yang diajarkan Rasulullah SAW setelah menyelesaikan sholat fardhu.
            </p>
          </div>
          <Link
            to="/sholat-wajib"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            <span>Lihat Semua Sholat Wajib</span>
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sholatWajibList.map((item) => (
            <Link
              key={item.id}
              to={`/sholat/${item.id}`}
              className="group relative bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 hover:border-emerald-500 dark:hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${item.badgeColor}`}>
                    {item.rakaat} Rakaat
                  </span>
                  <span className="font-arabic text-xl text-slate-400 dark:text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {item.arabicName}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5 font-medium">
                  <Clock size={13} className="text-emerald-600 dark:text-emerald-400" />
                  <span className="line-clamp-1">{item.time}</span>
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                {/* Urutan preview */}
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Urutan Amalan ({item.steps.length} Langkah):
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.steps.slice(0, 3).map((st, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {st.title.replace(/^\d+\.\s*/, '')}
                      </span>
                    ))}
                    {item.steps.length > 3 && (
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-medium">
                        +{item.steps.length - 3} lagi
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs font-bold text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">
                <span>Buka Panduan Amalan</span>
                <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Section 2: Sholat Sunnah */}
      <section id="sholat-sunnah" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
          <div>
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider mb-1">
              <span>🌙 Sholat Sunnah Muakkadah</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Amalan Sholat Sunnah
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Sekali buka nama sholat, semua doa, tata cara, dzikir, dan hajat yang ingin dibaca sudah tersusun dalam satu tempat.
            </p>
          </div>
          <Link
            to="/sholat-sunnah"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline"
          >
            <span>Lihat Semua Sholat Sunnah</span>
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sholatSunnahList.map((item) => (
            <Link
              key={item.id}
              to={`/sholat/${item.id}`}
              className="group relative bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 hover:border-blue-500 dark:hover:border-blue-500/60 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${item.badgeColor}`}>
                    {item.subtitle}
                  </span>
                  <span className="font-arabic text-xl text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.arabicName}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5 font-medium">
                  <Clock size={13} className="text-blue-600 dark:text-blue-400" />
                  <span className="line-clamp-1">{item.bestTime}</span>
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                {/* Urutan preview */}
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Langkah Amalan ({item.steps.length} Doa & Dzikir):
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.steps.slice(0, 3).map((st, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {st.title.replace(/^\d+\.\s*/, '')}
                      </span>
                    ))}
                    {item.steps.length > 3 && (
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-medium">
                        +{item.steps.length - 3} lagi
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                <span>Buka Panduan Amalan</span>
                <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Section 3: Doa Pilihan Populer */}
      <section id="doa-pilihan" className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
          <div>
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs uppercase tracking-wider mb-1">
              <span>🤲 Doa Pilihan Harian & Hajat</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Doa-Doa Pilihan Terpenting
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              Doa Nabi Yunus, Kedua Orang Tua, Seribu Dinar, Ayat Kursi, Sholawat Munjiyat, dan doa harian lainnya.
            </p>
          </div>
          <Link
            to="/doa-pilihan"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            <span>Lihat Semua Doa Pilihan ({doaPilihanList.length})</span>
            <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {doaPilihanList.slice(0, 4).map((doa, idx) => (
            <DoaCard
              key={doa.id}
              item={doa}
              index={idx}
              categoryLabel={doa.category}
              showCounter={false}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/doa-pilihan"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/20 active:scale-[0.98] transition-all"
          >
            <span>Buka Kumpulan Doa Pilihan Lengkap</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Section 4: Mengapa Amalin dibuat? */}
      <section className="max-w-4xl mx-auto px-4 text-center">
        <div className="p-8 md:p-10 rounded-3xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 flex items-center justify-center mx-auto text-xl">
            📖
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Format Bacaan yang Rapi & Terpercaya
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Setiap doa di Amalin disajikan konsisten dengan teks <strong>Arab berharakat</strong>, <strong>Latin</strong>, <strong>Terjemahan Indonesia</strong>, <strong>Keutamaan</strong>, dan <strong>Dalil / Referensi Shahih</strong> yang dapat diverifikasi langsung.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4 text-xs font-semibold text-slate-700 dark:text-slate-300">
            <span className="flex items-center gap-1.5"><CheckCircle size={15} className="text-emerald-500" /> Teks Arab & Harakat Jelas</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={15} className="text-emerald-500" /> Digital Tasbih Counter</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={15} className="text-emerald-500" /> Simpan Favorit Tanpa Login</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={15} className="text-emerald-500" /> Mode Terang & Gelap</span>
          </div>
        </div>
      </section>
    </div>
  );
}
