import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Moon, Sun, BookOpen, ChevronRight, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { sholatWajibList } from '../data/sholatWajib';
import { sholatSunnahList } from '../data/sholatSunnah';
import { doaPilihanList } from '../data/doaPilihan';

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, searchInitialQuery, setSearchInitialQuery } = useApp();
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Handle Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  // Focus input & initialize query when opened
  useEffect(() => {
    if (isSearchOpen) {
      if (searchInitialQuery) {
        setQuery(searchInitialQuery);
      }
      setTimeout(() => inputRef.current?.focus(), 60);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
      setSearchInitialQuery('');
    }
  }, [isSearchOpen, searchInitialQuery, setSearchInitialQuery]);

  if (!isSearchOpen) return null;

  const cleanQuery = query.trim().toLowerCase();

  // Filtering results
  const wajibResults = cleanQuery
    ? sholatWajibList.filter(s =>
        s.name.toLowerCase().includes(cleanQuery) ||
        s.description.toLowerCase().includes(cleanQuery) ||
        s.steps.some(st =>
          st.title.toLowerCase().includes(cleanQuery) ||
          st.latin?.toLowerCase().includes(cleanQuery) ||
          st.translation?.toLowerCase().includes(cleanQuery)
        )
      )
    : [];

  const sunnahResults = cleanQuery
    ? sholatSunnahList.filter(s =>
        s.name.toLowerCase().includes(cleanQuery) ||
        s.subtitle.toLowerCase().includes(cleanQuery) ||
        s.description.toLowerCase().includes(cleanQuery) ||
        s.steps.some(st =>
          st.title.toLowerCase().includes(cleanQuery) ||
          st.latin?.toLowerCase().includes(cleanQuery) ||
          st.translation?.toLowerCase().includes(cleanQuery)
        )
      )
    : [];

  const doaResults = cleanQuery
    ? doaPilihanList.filter(d =>
        d.title.toLowerCase().includes(cleanQuery) ||
        d.latin?.toLowerCase().includes(cleanQuery) ||
        d.translation?.toLowerCase().includes(cleanQuery) ||
        d.category.toLowerCase().includes(cleanQuery) ||
        d.tags.some(t => t.toLowerCase().includes(cleanQuery))
      )
    : [];

  const totalResults = wajibResults.length + sunnahResults.length + doaResults.length;

  const handleSelect = (path) => {
    setIsSearchOpen(false);
    navigate(path);
  };

  const quickPills = [
    { label: "Tahajud", q: "tahajud" },
    { label: "Rezeki", q: "rezeki" },
    { label: "Yunus", q: "yunus" },
    { label: "Orang Tua", q: "orang tua" },
    { label: "Maghrib", q: "maghrib" },
    { label: "Ayat Kursi", q: "kursi" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-3 md:p-6 pt-16 md:pt-24 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[85vh]">
        {/* Search Input Bar */}
        <div className="p-4 md:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari sholat, doa, rezeki, yunus, tahajud, dll..."
            className="w-full bg-transparent text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none text-base md:text-lg"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              type="button"
            >
              <X size={18} />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-xs px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 font-medium"
            type="button"
          >
            ESC
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        {!cleanQuery && (
          <div className="p-5 border-b border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/40">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2.5">
              Pencarian Populer:
            </span>
            <div className="flex flex-wrap gap-2">
              {quickPills.map(p => (
                <button
                  key={p.q}
                  onClick={() => setQuery(p.q)}
                  type="button"
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-emerald-500 hover:text-emerald-600 transition-colors"
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results Container */}
        <div className="flex-1 overflow-y-auto p-4 md:p-5 space-y-6">
          {cleanQuery && totalResults === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                Tidak ditemukan hasil untuk "<span className="font-semibold text-slate-800 dark:text-slate-200">{query}</span>".
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                Coba gunakan kata kunci lain seperti: Dhuha, Taubat, Kursi, Ortu, Hutang.
              </p>
            </div>
          )}

          {/* Sholat Wajib Results */}
          {wajibResults.length > 0 && (
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-2.5">
                🕌 Sholat Wajib ({wajibResults.length})
              </span>
              <div className="space-y-2">
                {wajibResults.map(item => (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(`/sholat/${item.id}`)}
                    className="p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500/50 hover:bg-emerald-50/40 dark:hover:bg-emerald-950/20 cursor-pointer transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-emerald-700 dark:group-hover:text-emerald-400">
                          {item.name}
                        </h4>
                        <span className="font-arabic text-xs text-slate-400">
                          {item.arabicName}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                        {item.description}
                      </p>
                    </div>
                    <ChevronRight size={16} className="text-slate-400 group-hover:text-emerald-600 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Sholat Sunnah Results */}
          {sunnahResults.length > 0 && (
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-2.5">
                🌙 Sholat Sunnah ({sunnahResults.length})
              </span>
              <div className="space-y-2">
                {sunnahResults.map(item => (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(`/sholat/${item.id}`)}
                    className="p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500/50 hover:bg-blue-50/40 dark:hover:bg-blue-950/20 cursor-pointer transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-700 dark:group-hover:text-blue-400">
                          {item.name}
                        </h4>
                        <span className="font-arabic text-xs text-slate-400">
                          {item.arabicName}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                        {item.subtitle} • {item.description}
                      </p>
                    </div>
                    <ChevronRight size={16} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Doa Pilihan Results */}
          {doaResults.length > 0 && (
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block mb-2.5">
                🤲 Doa Pilihan ({doaResults.length})
              </span>
              <div className="space-y-2">
                {doaResults.map(item => (
                  <div
                    key={item.id}
                    onClick={() => handleSelect(`/doa-pilihan#${item.id}`)}
                    className="p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-amber-500 dark:hover:border-amber-500/50 hover:bg-amber-50/40 dark:hover:bg-amber-950/20 cursor-pointer transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-amber-700 dark:group-hover:text-amber-400">
                          {item.title}
                        </h4>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                        "{item.translation}"
                      </p>
                    </div>
                    <ChevronRight size={16} className="text-slate-400 group-hover:text-amber-600 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
