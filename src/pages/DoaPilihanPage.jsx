import React, { useState, useMemo, useEffect } from 'react';
import { Search, Sparkles, Filter, Bookmark, X } from 'lucide-react';
import { doaCategories, doaPilihanList } from '../data/doaPilihan';
import DoaCard from '../components/DoaCard';

export default function DoaPilihanPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  // Handle scroll to hash if user came with anchor
  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const filteredDoa = useMemo(() => {
    return doaPilihanList.filter(item => {
      const matchesCategory =
        selectedCategory === "Semua" || item.category === selectedCategory;

      const cleanQuery = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !cleanQuery ||
        item.title.toLowerCase().includes(cleanQuery) ||
        item.latin?.toLowerCase().includes(cleanQuery) ||
        item.translation?.toLowerCase().includes(cleanQuery) ||
        item.tags.some(t => t.toLowerCase().includes(cleanQuery));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-20 space-y-8 pt-6">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-800">
          Kumpulan Doa Pilihan
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Doa-Doa Ma'tsur & Kebutuhan Harian
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Dari Doa Nabi Yunus, Kedua Orang Tua, Ayat Seribu Dinar, Ayat Kursi, hingga doa-doa harian lengkap dengan teks Arab, Latin, arti, keutamaan, dan dalilnya.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="space-y-4 max-w-3xl mx-auto">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari doa (misal: Yunus, Rezeki, Orang Tua, Kursi, Tidur)..."
            className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-emerald-500 shadow-sm text-sm sm:text-base"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X size={18} />
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {doaCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-emerald-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Result Stats */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
        <span>Menampilkan {filteredDoa.length} doa</span>
        {selectedCategory !== "Semua" && (
          <span>Kategori: <strong className="text-emerald-600 dark:text-emerald-400">{selectedCategory}</strong></span>
        )}
      </div>

      {/* Cards List */}
      {filteredDoa.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
          <p className="text-slate-600 dark:text-slate-300 font-semibold">
            Tidak ada doa yang cocok dengan pencarian Anda.
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Coba gunakan kata kunci umum atau pilih kategori "Semua".
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('Semua'); }}
            className="mt-4 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold"
          >
            Reset Filter
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredDoa.map((doa, idx) => (
            <DoaCard
              key={doa.id}
              item={doa}
              index={idx}
              categoryLabel={doa.category}
              showCounter={false}
            />
          ))}
        </div>
      )}
    </div>
  );
}
