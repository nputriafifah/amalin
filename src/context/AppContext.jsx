import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('amalin_theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Arabic font size: 'sm', 'md', 'lg', 'xl'
  const [arabicFontSize, setArabicFontSize] = useState(() => {
    return localStorage.getItem('amalin_arabic_size') || 'md';
  });

  // Visibility toggles
  const [showLatin, setShowLatin] = useState(() => {
    const saved = localStorage.getItem('amalin_show_latin');
    return saved !== null ? saved === 'true' : true;
  });

  const [showTranslation, setShowTranslation] = useState(() => {
    const saved = localStorage.getItem('amalin_show_translation');
    return saved !== null ? saved === 'true' : true;
  });

  // Favorites list: array of { id, type: 'wajib'|'sunnah'|'doa', title, subtitle, path }
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('amalin_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Global search modal open/close & query
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchInitialQuery, setSearchInitialQuery] = useState('');

  const openSearchWithQuery = (q = '') => {
    setSearchInitialQuery(q);
    setIsSearchOpen(true);
  };

  // Sync dark mode class
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('amalin_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('amalin_theme', 'light');
    }
  }, [darkMode]);

  // Sync font size
  useEffect(() => {
    localStorage.setItem('amalin_arabic_size', arabicFontSize);
  }, [arabicFontSize]);

  // Sync toggles
  useEffect(() => {
    localStorage.setItem('amalin_show_latin', String(showLatin));
  }, [showLatin]);

  useEffect(() => {
    localStorage.setItem('amalin_show_translation', String(showTranslation));
  }, [showTranslation]);

  // Sync favorites
  useEffect(() => {
    try {
      localStorage.setItem('amalin_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error("Gagal menyimpan favorit ke localStorage", e);
    }
  }, [favorites]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  const isFavorite = (id) => favorites.some(item => item.id === id);

  const toggleFavorite = (item) => {
    setFavorites(prev => {
      const exists = prev.some(f => f.id === item.id);
      if (exists) {
        return prev.filter(f => f.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const getArabicFontSizeClass = () => {
    switch (arabicFontSize) {
      case 'sm': return 'text-xl md:text-2xl';
      case 'lg': return 'text-3xl md:text-4xl';
      case 'xl': return 'text-4xl md:text-5xl';
      case 'md':
      default: return 'text-2xl md:text-3xl';
    }
  };

  return (
    <AppContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        arabicFontSize,
        setArabicFontSize,
        getArabicFontSizeClass,
        showLatin,
        setShowLatin,
        showTranslation,
        setShowTranslation,
        favorites,
        isFavorite,
        toggleFavorite,
        isSearchOpen,
        setIsSearchOpen,
        searchInitialQuery,
        setSearchInitialQuery,
        openSearchWithQuery
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
