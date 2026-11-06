import React from 'react';
import { ShieldCheck, Heart, Sparkles, BookOpen, Clock, CheckCircle } from 'lucide-react';

export default function TentangPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-20 space-y-12 pt-6">
      {/* Title */}
      <div className="text-center space-y-3">
        <span className="text-3xl">🌙</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Tentang Amalin
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          Panduan amalan dan doa setelah sholat dalam satu tempat yang praktis, tenang, dan terstruktur.
        </p>
      </div>

      {/* Cerita & Latar Belakang */}
      <section className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 space-y-4 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <span>✨</span>
          <span>Latar Belakang & Misi</span>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Seringkali setelah selesai sholat (misalnya Tahajud, Subuh, atau Dhuha), kita ingin memanjatkan amalan doa dan dzikir yang diajarkan Rasulullah SAW. Namun pada kenyataannya, banyak dari kita harus membuka TikTok, Instagram, atau Google satu per satu untuk mencari urutannya:
        </p>
        <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 text-xs sm:text-sm text-amber-900 dark:text-amber-200 space-y-1">
          <p className="italic">
            "Setelah sholat Tahajud baca apa dulu ya? Dzikirnya berapa kali? Doa rezeki yang mana? Sholawatnya bagaimana?"
          </p>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <strong>Amalin hadir untuk menyelesaikan masalah tersebut.</strong> Sekali membuka satu sholat, seluruh rangkaian amalan yang berkaitan sudah tersusun rapi dari awal hingga akhir sesuai urutan yang diajarkan para ulama dan hadits ma'tsur, sehingga pengguna tinggal mengikuti alurnya dengan tenang.
        </p>
      </section>

      {/* 5 Nilai Utama */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Karakteristik Amalin
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
            <span className="text-xl">🕌</span>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">Alur Terstruktur (Step-by-Step)</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Disusun berurutan mulai dari istighfar, dzikir pengagungan, ayat kursi, 3 Qul, hingga doa permohonan hajat.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
            <span className="text-xl">📚</span>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">Dalil & Referensi Terpercaya</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Setiap amalan dilengkapi referensi shahih (Shahih Bukhari, Muslim, Abu Daud, Tirmidzi, dll.) agar hati mantap dalam beramal.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
            <span className="text-xl">📿</span>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">Tasbih Counter Interaktif</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Memudahkan menghitung dzikir 33x atau 100x langsung di layar tanpa perlu aplikasi tambahan.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
            <span className="text-xl">🔒</span>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">Privasi Terjaga & Tanpa Login</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Semua data favorit dan preferensi tampilan disimpan aman di browser (LocalStorage) milik pengguna sendiri.
            </p>
          </div>
        </div>
      </section>

      {/* Adab Berdoa */}
      <section className="bg-emerald-50/70 dark:bg-emerald-950/20 rounded-3xl p-6 sm:p-8 border border-emerald-200/60 dark:border-emerald-800/40 space-y-4">
        <h2 className="text-lg font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
          <Sparkles size={18} />
          <span>Adab-Adab dalam Berdoa & Berdzikir</span>
        </h2>
        <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-950 dark:text-emerald-200/90 leading-relaxed">
          <li className="flex items-start gap-2">
            <CheckCircle size={15} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
            <span>Dalam keadaan suci (berwudhu) dan menghadap kiblat.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={15} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
            <span>Memulai dengan memuji Allah (Tahmid/Alhamdulillah) dan bershalawat atas Nabi SAW.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={15} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
            <span>Merendahkan diri (tadharru') dengan suara lembut dan hati yang hadir (khusyuk).</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle size={15} className="text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
            <span>Yakin bahwa Allah Maha Mendengar dan pasti mengabulkan doa hamba-Nya pada waktu terbaik.</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
