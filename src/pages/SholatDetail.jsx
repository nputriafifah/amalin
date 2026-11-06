import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft, Clock, Sparkles, BookOpen, Bookmark, BookmarkCheck,
  Play, ChevronDown, ChevronUp, Share2, Check, CheckCircle2
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { sholatWajibList } from '../data/sholatWajib';
import { sholatSunnahList } from '../data/sholatSunnah';
import DoaCard from '../components/DoaCard';
import GuidedFlowModal from '../components/GuidedFlowModal';

export default function SholatDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isFavorite, toggleFavorite } = useApp();

  const [guidedModalOpen, setGuidedModalOpen] = useState(false);
  const [tataCaraOpen, setTataCaraOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Scroll to top on load or hash anchor
  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [id]);

  // Find sholat data in wajib or sunnah
  const sholatData =
    sholatWajibList.find(s => s.id === id) ||
    sholatSunnahList.find(s => s.id === id);

  if (!sholatData) {
    return (
      <div className="max-w-xl mx-auto text-center py-24 px-4 space-y-4">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
          Halaman Sholat Tidak Ditemukan
        </h2>
        <p className="text-sm text-slate-500">
          Sholat dengan ID "{id}" tidak tersedia dalam panduan.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-sm"
        >
          <ArrowLeft size={16} />
          <span>Kembali ke Beranda</span>
        </Link>
      </div>
    );
  }

  const isWajib = sholatWajibList.some(s => s.id === id);
  const favorited = isFavorite(sholatData.id);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20 space-y-10">
      {/* Back button & Breadcrumb */}
      <div className="flex items-center justify-between pt-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Kembali ke Beranda</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              toggleFavorite({
                id: sholatData.id,
                title: sholatData.name,
                subtitle: sholatData.description?.slice(0, 70) + '...',
                type: isWajib ? 'wajib' : 'sunnah',
                path: `/sholat/${sholatData.id}`
              })
            }
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              favorited
                ? 'bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400'
                : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            {favorited ? <BookmarkCheck size={15} className="fill-current" /> : <Bookmark size={15} />}
            <span>{favorited ? 'Tersimpan' : 'Favorit'}</span>
          </button>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200 transition-colors"
            title="Salin Tautan"
          >
            {copiedLink ? <Check size={15} className="text-emerald-500" /> : <Share2 size={15} />}
            <span>{copiedLink ? 'Tersalin' : 'Bagikan'}</span>
          </button>
        </div>
      </div>

      {/* Main Header Hero Card */}
      <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-900/60 border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
              {isWajib ? 'Sholat Wajib' : 'Sholat Sunnah'}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              {sholatData.rakaat} {typeof sholatData.rakaat === 'number' ? 'Rakaat' : ''}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {sholatData.name}
            </h1>
            <p className="font-arabic text-2xl sm:text-3xl text-emerald-700 dark:text-emerald-400">
              {sholatData.arabicName}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2 font-medium">
            <Clock size={16} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
            <span>Waktu: {sholatData.time || sholatData.bestTime}</span>
          </p>

          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed pt-1">
            {sholatData.description}
          </p>

          {/* Action Trigger for Guided Mode */}
          <div className="pt-4 flex flex-wrap gap-3">
            <button
              onClick={() => setGuidedModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/25 active:scale-[0.98] transition-all"
            >
              <Play size={18} className="fill-current" />
              <span>Mulai Mode Terpandu (Alur Langkah)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tata Cara Ringkas Accordion */}
      {sholatData.tataCaraRingkas && (
        <div className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
          <button
            onClick={() => setTataCaraOpen(prev => !prev)}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-sm">
                🕌
              </span>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                  Tata Cara Sholat Ringkas
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Panduan rukun dan sunnah pelaksanaan sebelum berdzikir
                </p>
              </div>
            </div>
            {tataCaraOpen ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
          </button>

          {tataCaraOpen && (
            <div className="p-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 space-y-2.5 animate-fade-in">
              {sholatData.tataCaraRingkas.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-emerald-600/10 text-emerald-700 dark:text-emerald-400 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Main Amalan Steps: Doa & Dzikir Setelah Sholat */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>🤲</span>
              <span>Urutan Amalan Setelah {sholatData.name}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              Tersusun rapi sesuai urutan amalan ma'tsur, tinggal diikuti satu per satu.
            </p>
          </div>

          <button
            onClick={() => setGuidedModalOpen(true)}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            <Sparkles size={14} />
            <span>Buka Tampilan Fokus (Step-by-Step)</span>
          </button>
        </div>

        {/* Step Cards List */}
        <div className="space-y-6">
          {sholatData.steps.map((step, index) => (
            <DoaCard
              key={step.id}
              item={step}
              index={index}
              categoryLabel={`Langkah ${index + 1} dari ${sholatData.steps.length}`}
              showCounter={true}
            />
          ))}
        </div>
      </section>

      {/* Section Keutamaan Sholat */}
      {sholatData.keutamaan && (
        <section className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-200/80 dark:border-amber-900/40 space-y-4">
          <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-sm uppercase tracking-wider">
            <Sparkles size={18} />
            <span>✨ Keutamaan {sholatData.name}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            {sholatData.keutamaan.map((k, kIdx) => (
              <div
                key={kIdx}
                className="p-4 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-amber-200/60 dark:border-amber-900/30 space-y-2 shadow-sm"
              >
                <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-slate-100">
                  {k.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {k.desc}
                </p>
                {k.dalil && (
                  <div className="pt-2 border-t border-amber-100 dark:border-amber-900/30 flex items-start gap-1.5 text-[11px] font-medium text-amber-900 dark:text-amber-300">
                    <BookOpen size={13} className="flex-shrink-0 mt-0.5" />
                    <span>{k.dalil}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Section Referensi & Dalil */}
      {sholatData.referensi && (
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-100/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 flex items-start gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          <BookOpen size={18} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-800 dark:text-slate-200 block mb-0.5">
              📚 Sumber & Referensi Dalil:
            </span>
            <p>{sholatData.referensi}</p>
          </div>
        </div>
      )}

      {/* Guided Flow Modal trigger */}
      <GuidedFlowModal
        isOpen={guidedModalOpen}
        onClose={() => setGuidedModalOpen(false)}
        sholatData={sholatData}
      />
    </div>
  );
}
