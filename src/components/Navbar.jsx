import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Moon, Sun, Search, Bookmark, Menu, X, Sliders
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Navbar() {
  const {
    darkMode,
    toggleDarkMode,
    setIsSearchOpen,
    favorites,
    arabicFontSize,
    setArabicFontSize,
    showLatin,
    setShowLatin,
    showTranslation,
    setShowTranslation
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const settingsRef = useRef(null);
  const location = useLocation();

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Sholat Wajib', path: '/sholat-wajib' },
    { name: 'Sholat Sunnah', path: '/sholat-sunnah' },
    { name: 'Doa Pilihan', path: '/doa-pilihan' },
    { name: 'Favorit', path: '/favorit', badge: favorites.length > 0 ? favorites.length : null },
    { name: 'Tentang', path: '/tentang' },
  ];

  // Close settings dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (settingsRef.current && !settingsRef.current.contains(e.target)) {
        setSettingsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
            <span className="text-xl">🌙</span>
          </div>
          <div>
            <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
              Amalin<span className="text-emerald-500">.</span>
            </span>
            <span className="hidden sm:block text-[10px] text-slate-400 dark:text-slate-500 font-medium -mt-1 tracking-wide">
              Panduan Amalan Setelah Sholat
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative px-3 py-1.5 rounded-xl text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              {link.name}
              {link.badge !== null && link.badge > 0 && (
                <span className="ml-1.5 px-1.5 py-0.5 text-[10px] rounded-full bg-rose-500 text-white font-bold">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Quick Search Trigger */}
          <button
            onClick={() => setIsSearchOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-slate-700 dark:hover:text-slate-200 text-xs sm:text-sm font-medium transition-all"
            title="Cari Doa / Sholat (Ctrl+K)"
            type="button"
          >
            <Search size={16} />
            <span className="hidden sm:inline">Cari amalan...</span>
            <kbd className="hidden lg:inline text-[10px] px-1.5 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-400 font-mono">
              Ctrl K
            </kbd>
          </button>

          {/* Reading Display Settings Trigger */}
          <div className="relative" ref={settingsRef}>
            <button
              onClick={() => setSettingsOpen(prev => !prev)}
              className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
              title="Pengaturan Tampilan Bacaan"
              type="button"
            >
              <Sliders size={18} />
            </button>

            {/* Reading Settings Dropdown */}
            {settingsOpen && (
              <div className="absolute right-0 mt-2 w-72 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl z-50 animate-fade-in text-sm">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-3">
                  <span className="font-semibold text-slate-900 dark:text-slate-100">
                    Pengaturan Tampilan
                  </span>
                  <button
                    onClick={() => setSettingsOpen(false)}
                    className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                    type="button"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Font Size Selector */}
                <div className="mb-4">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block mb-2">
                    Ukuran Font Arab:
                  </span>
                  <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-center">
                    {['sm', 'md', 'lg', 'xl'].map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setArabicFontSize(sz)}
                        type="button"
                        className={`py-1 rounded-lg text-xs font-semibold uppercase transition-all ${
                          arabicFontSize === sz
                            ? 'bg-emerald-600 text-white shadow-sm'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Latin Toggle */}
                <div className="flex items-center justify-between py-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                    Teks Latin
                  </span>
                  <button
                    onClick={() => setShowLatin(p => !p)}
                    type="button"
                    className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
                      showLatin ? 'bg-emerald-600' : 'bg-slate-300 dark:bg-slate-700'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-white transition-transform ${
                        showLatin ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>

                {/* Translation Toggle */}
                <div className="flex items-center justify-between py-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                    Terjemahan Indonesia
                  </span>
                  <button
                    onClick={() => setShowTranslation(p => !p)}
                    type="button"
                    className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
                      showTranslation ? 'bg-emerald-600' : 'bg-slate-300 dark:bg-slate-700'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full bg-white transition-transform ${
                        showTranslation ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Dark / Light Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
            title={darkMode ? "Ganti ke Mode Terang" : "Ganti ke Mode Gelap"}
            type="button"
          >
            {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(prev => !prev)}
            className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            title="Menu Navigasi"
            type="button"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-2 pb-5 space-y-1.5 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium ${
                isActive(link.path)
                  ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 font-semibold'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <span>{link.name}</span>
              {link.badge !== null && link.badge > 0 && (
                <span className="px-2 py-0.5 text-xs rounded-full bg-rose-500 text-white font-bold">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
