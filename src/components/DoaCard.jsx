import React, { useState } from 'react';
import { Bookmark, BookmarkCheck, Copy, Check, Share2, BookOpen, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { useApp } from '../context/AppContext';
import TasbihCounter from './TasbihCounter';

export default function DoaCard({
  item,
  index = null,
  categoryLabel = null,
  showCounter = true
}) {
  const {
    getArabicFontSizeClass,
    showLatin,
    showTranslation,
    isFavorite,
    toggleFavorite
  } = useApp();

  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  const favorited = isFavorite(item.id);

  const handleCopy = () => {
    let text = `${item.title || item.name || 'Doa'}\n\n`;

    if (item.arabic) {
      text += `📖 Arab:\n${item.arabic}\n\n`;
    }
    if (item.latin) {
      text += `🔤 Latin:\n${item.latin}\n\n`;
    }
    if (item.translation) {
      text += `🇮🇩 Terjemahan:\n"${item.translation}"\n\n`;
    }
    if (item.keutamaan) {
      text += `✨ Keutamaan:\n${item.keutamaan}\n\n`;
    }
    if (item.dalil) {
      text += `📚 Dalil/Referensi:\n${item.dalil}\n\n`;
    }
    text += `— Dibagikan dari Amalin (Panduan Amalan Setelah Sholat)`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: item.title || item.name,
          text: `${item.title || item.name}\n\n${item.arabic || ''}\n\n${item.translation || ''}`,
          url: window.location.href,
        });
      } catch {
        // Ignored or dismissed
      }
    } else {
      handleCopy();
    }
  };

  return (
    <article
      id={item.id}
      className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
    >
      {/* Card Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-900/50">
        <div className="flex items-center gap-2.5 min-w-0 pr-2">
          {index !== null && (
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-xs font-bold flex items-center justify-center">
              {index + 1}
            </span>
          )}
          <div className="min-w-0">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base md:text-lg leading-snug truncate">
              {item.title || item.name}
            </h3>
            {categoryLabel && (
              <span className="inline-block text-[11px] font-medium text-emerald-700 dark:text-emerald-400">
                {categoryLabel}
              </span>
            )}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <button
            onClick={() =>
              toggleFavorite({
                id: item.id,
                title: item.title || item.name,
                subtitle: item.translation?.slice(0, 60) + '...',
                arabic: item.arabic,
                type: 'doa',
                path: window.location.pathname + '#' + item.id
              })
            }
            className={`p-2 rounded-xl transition-colors ${
              favorited
                ? 'text-rose-500 bg-rose-50 dark:bg-rose-950/30'
                : 'text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            title={favorited ? "Hapus dari Favorit" : "Simpan ke Favorit"}
            type="button"
          >
            {favorited ? <BookmarkCheck size={18} className="fill-current" /> : <Bookmark size={18} />}
          </button>

          <button
            onClick={handleCopy}
            className="p-2 rounded-xl text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Salin Doa"
            type="button"
          >
            {copied ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
          </button>

          <button
            onClick={handleShare}
            className="p-2 rounded-xl text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Bagikan Doa"
            type="button"
          >
            <Share2 size={18} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-5 md:p-6 space-y-5">
        {/* If item has subItems (e.g. Tasbih 33x, Tahmid 33x, Takbir 33x) */}
        {item.subItems && (
          <div className="space-y-4">
            {item.subItems.map((sub, sIdx) => (
              <div
                key={sIdx}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    {sub.name}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100/60 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-mono">
                    Target: {sub.target}x
                  </span>
                </div>

                {/* Arabic */}
                <p className={`font-arabic text-right leading-loose text-slate-900 dark:text-slate-100 my-2 ${getArabicFontSizeClass()}`} dir="rtl">
                  {sub.arabic}
                </p>

                {showLatin && sub.latin && (
                  <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300 italic mt-2">
                    {sub.latin}
                  </p>
                )}

                {showTranslation && sub.translation && (
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    "{sub.translation}"
                  </p>
                )}

                {showCounter && (
                  <TasbihCounter target={sub.target} label={sub.name} />
                )}
              </div>
            ))}

            {item.closingArabic && (
              <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/30">
                <span className="text-xs font-semibold text-amber-800 dark:text-amber-300 block mb-1">
                  Penutup Penggenap 100:
                </span>
                <p className={`font-arabic text-right leading-loose text-slate-900 dark:text-slate-100 ${getArabicFontSizeClass()}`} dir="rtl">
                  {item.closingArabic}
                </p>
                {showLatin && (
                  <p className="text-sm text-amber-900 dark:text-amber-200/90 italic mt-2">
                    {item.closingLatin}
                  </p>
                )}
                {showTranslation && (
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    "{item.closingTranslation}"
                  </p>
                )}
              </div>
            )}
          </div>
        )}

        {/* If item has items list (e.g. Al-Ikhlas, Al-Falaq, An-Nas) */}
        {item.items && (
          <div className="space-y-4">
            {item.items.map((it, iIdx) => (
              <div
                key={iIdx}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    {it.name}
                  </span>
                </div>
                <p className={`font-arabic text-right leading-loose text-slate-900 dark:text-slate-100 my-2 ${getArabicFontSizeClass()}`} dir="rtl">
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

        {/* Standard Single Arabic Body */}
        {item.arabic && !item.subItems && !item.items && (
          <div>
            <p
              className={`font-arabic text-right text-slate-900 dark:text-slate-100 whitespace-pre-line ${getArabicFontSizeClass()}`}
              dir="rtl"
            >
              {item.arabic}
            </p>
          </div>
        )}

        {/* Latin Transliteration */}
        {showLatin && item.latin && !item.subItems && !item.items && (
          <div className="p-3.5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/30">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-emerald-800 dark:text-emerald-400 block mb-1">
              Latin
            </span>
            <p className="text-sm md:text-base text-emerald-900 dark:text-emerald-200/90 leading-relaxed italic whitespace-pre-line">
              {item.latin}
            </p>
          </div>
        )}

        {/* Indonesian Translation */}
        {showTranslation && item.translation && !item.subItems && !item.items && (
          <div>
            <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 dark:text-slate-500 block mb-1">
              Arti / Terjemahan
            </span>
            <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
              "{item.translation}"
            </p>
          </div>
        )}

        {/* Note if any */}
        {item.note && (
          <div className="p-3 rounded-xl bg-blue-50/80 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30 text-xs text-blue-800 dark:text-blue-300">
            <span className="font-semibold">Catatan:</span> {item.note}
          </div>
        )}

        {/* Single Target Count Counter (if specified on item level) */}
        {showCounter && item.targetCount && !item.subItems && (
          <TasbihCounter target={item.targetCount} label={`${item.title || item.name} (${item.targetCount}x)`} />
        )}

        {/* Keutamaan Box */}
        {item.keutamaan && (
          <div className="p-4 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50/50 dark:from-amber-950/20 dark:to-orange-950/10 border border-amber-200/60 dark:border-amber-800/30">
            <div className="flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-bold text-amber-900 dark:text-amber-300 block mb-1 uppercase tracking-wide">
                  Keutamaan
                </span>
                <p className="text-xs md:text-sm text-amber-950 dark:text-amber-200/90 leading-relaxed">
                  {item.keutamaan}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Dalil / Referensi Box */}
        {item.dalil && (
          <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800 flex items-start gap-2.5">
            <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
            <div className="min-w-0">
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block uppercase tracking-wider">
                Dalil & Referensi
              </span>
              <p className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-0.5">
                {item.dalil}
              </p>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
