import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchModal from './components/SearchModal';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import SholatWajibPage from './pages/SholatWajibPage';
import SholatSunnahPage from './pages/SholatSunnahPage';
import SholatDetail from './pages/SholatDetail';
import DoaPilihanPage from './pages/DoaPilihanPage';
import FavoritPage from './pages/FavoritPage';
import TentangPage from './pages/TentangPage';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200">
      <ScrollToTop />
      <Navbar />
      <SearchModal />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sholat-wajib" element={<SholatWajibPage />} />
          <Route path="/sholat-sunnah" element={<SholatSunnahPage />} />
          <Route path="/sholat/:id" element={<SholatDetail />} />
          <Route path="/doa-pilihan" element={<DoaPilihanPage />} />
          <Route path="/favorit" element={<FavoritPage />} />
          <Route path="/tentang" element={<TentangPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
