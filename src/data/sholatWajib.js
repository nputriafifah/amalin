export const sholatWajibList = [
  {
    id: "subuh",
    name: "Sholat Subuh",
    arabicName: "صَلَاةُ الصُّبْح",
    rakaat: 2,
    time: "Fajar Shadiq hingga sebelum terbit matahari (Syuruq)",
    color: "from-amber-500/20 to-emerald-500/20",
    badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300",
    description: "Sholat fardhu 2 rakaat di awal fajar yang disaksikan langsung oleh para malaikat malam dan malaikat siang.",
    tataCaraRingkas: [
      "Berniat sholat fardhu Subuh 2 rakaat menghadap kiblat karena Allah Ta'ala.",
      "Takbiratul ihram, membaca doa iftitah, Al-Fatihah, dan surat pendek (disunnahkan surat yang agak panjang seperti Al-Waqi'ah atau ayat-ayat juz 30).",
      "Ruku', i'tidal, sujud, duduk di antara dua sujud, dan sujud kedua.",
      "Bangkit ke rakaat kedua, membaca Al-Fatihah dan surat pendek, ruku', i'tidal (bisa membaca doa qunut subuh sesuai madzhab).",
      "Sujud, duduk tahiyyat akhir, membaca tasyahhud dan sholawat, lalu salam ke kanan dan ke kiri."
    ],
    keutamaan: [
      {
        title: "Disaksikan Para Malaikat",
        desc: "Shalat Subuh disaksikan langsung oleh malaikat malam dan siang yang bergantian bertugas menjaga manusia.",
        dalil: "QS. Al-Isra': 78 - 'Sesungguhnya sholat fajar (subuh) itu disaksikan (oleh malaikat)'"
      },
      {
        title: "Jaminan Masuk Surga & Terhindar dari Neraka",
        desc: "Barangsiapa mengerjakan sholat bardain (Subuh dan Ashar), ia dijamin masuk surga.",
        dalil: "HR. Bukhari no. 574 & Muslim no. 635"
      },
      {
        title: "Pahala Seperti Sholat Semalam Suntuk",
        desc: "Barangsiapa sholat Isya berjamaah seolah ia sholat setengah malam, dan barangsiapa sholat Subuh berjamaah seolah sholat semalam penuh.",
        dalil: "HR. Muslim no. 656"
      }
    ],
    referensi: "Kitab Al-Adzkar karya Imam An-Nawawi, Shahih Bukhari, dan Shahih Muslim.",
    steps: [
      {
        id: "subuh-istighfar",
        title: "1. Istighfar & Permohonan Keselamatan",
        type: "dzikir",
        targetCount: 3,
        arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ\n\nاللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
        latin: "Astaghfirullaahal-'adziim alladzii laa ilaaha illaa huwal-hayyul-qayyuumu wa atuubu ilaih. (3x)\n\nAllaahumma antas-salaam wa minkas-salaam, tabaarakta yaa dzal-jalaali wal-ikraam.",
        translation: "Aku memohon ampun kepada Allah Yang Maha Agung, tiada Tuhan selain Dia Yang Maha Hidup lagi terus menerus mengurus makhluk-Nya, dan aku bertaubat kepada-Nya. (3x)\n\nYa Allah, Engkaulah As-Salam (Yang memberi keselamatan) dan dari-Mu lah keselamatan, Maha Berkah Engkau wahai Dzat Pemilik Keagungan dan Kemuliaan.",
        note: "Dibaca segera setelah salam sholat fardhu.",
        dalil: "HR. Muslim no. 591 dari Tsauban RA"
      },
      {
        id: "subuh-tahlil-pembuka",
        title: "2. Tahlil Khusus Subuh (10x Sebelum Mengubah Kaki)",
        type: "dzikir",
        targetCount: 10,
        arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        latin: "Laa ilaaha illallaahu wahdahu laa syariika lah, lahul-mulku wa lahul-hamdu yuhyii wa yumiitu wa huwa 'alaa kulli syai-in qadiir.",
        translation: "Tiada Tuhan selain Allah semata, tiada sekutu bagi-Nya. Bagi-Nya segala kerajaan dan bagi-Nya segala puji, Dia Yang menghidupkan dan mematikan, dan Dia Maha Kuasa atas segala sesuatu.",
        note: "Dianjurkan dibaca 10x setelah sholat Subuh sebelum berbicara urusan duniawi untuk benteng perlindungan hari itu.",
        dalil: "HR. At-Tirmidzi no. 3474, dishahihkan Al-Albani"
      },
      {
        id: "subuh-lindung-neraka-7x",
        title: "3. Doa Perlindungan Api Neraka (7x)",
        type: "doa",
        targetCount: 7,
        arabic: "اللَّهُمَّ أَجِرْنَا مِنَ النَّارِ",
        latin: "Allaahumma ajirnaa minan-naar (atau: Allaahumma ajirnii minan-naar) - 7x",
        translation: "Ya Allah, lindungilah kami (aku) dari siksa api neraka.",
        note: "Dibaca 7x setelah Subuh dan Maghrib sebelum berbicara dengan siapapun.",
        dalil: "HR. Abu Daud no. 5079 & Ahmad no. 17362"
      },
      {
        id: "subuh-doa-ilmu",
        title: "4. Doa Memohon Ilmu, Rezeki, & Amal Diterima",
        type: "doa",
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
        latin: "Allaahumma innii as-aluka 'ilman naafi'an, wa rizqan thayyiban, wa 'amalan mutaqabbalaa.",
        translation: "Ya Allah, sesungguhnya aku memohon kepada-Mu ilmu yang bermanfaat, rezeki yang halal lagi baik, dan amal perbuatan yang diterima.",
        note: "Doa yang rutin dibaca Rasulullah SAW selesai sholat Subuh saat salam/wirid pagi.",
        dalil: "HR. Ibnu Majah no. 925 & Ahmad no. 26521"
      },
      {
        id: "subuh-tasbih-tahmid-takbir",
        title: "5. Tasbih, Tahmid, & Takbir (33x Masing-masing)",
        type: "counter",
        subItems: [
          {
            name: "Tasbih (33x)",
            arabic: "سُبْحَانَ اللَّهِ",
            latin: "Subhaanallah",
            translation: "Maha Suci Allah",
            target: 33
          },
          {
            name: "Tahmid (33x)",
            arabic: "الْحَمْدُ لِلَّهِ",
            latin: "Alhamdulillah",
            translation: "Segala puji bagi Allah",
            target: 33
          },
          {
            name: "Takbir (33x)",
            arabic: "اللَّهُ أَكْبَرُ",
            latin: "Allahu Akbar",
            translation: "Allah Maha Besar",
            target: 33
          }
        ],
        closingArabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        closingLatin: "Laa ilaaha illallaahu wahdahu laa syariika lah, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli syai-in qadiir (1x penggenap 100)",
        closingTranslation: "Tiada Tuhan selain Allah semata, tiada sekutu bagi-Nya. Milik-Nya kerajaan dan segala puji, dan Dia Maha Kuasa atas segala sesuatu.",
        dalil: "HR. Muslim no. 597: Diampuni dosa-dosanya walaupun sebanyak buih di lautan."
      },
      {
        id: "subuh-ayat-kursi",
        title: "6. Membaca Ayat Kursi (1x atau 7x)",
        type: "bacaan",
        targetCount: 7,
        arabic: "اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
        latin: "Allaahu laa ilaaha illaa huwal-hayyul-qayyuum, laa ta'khudzuhuu sinatuw wa laa na'uum, lahuu maa fis-samaawaati wa maa fil-ardh, man dzalladzii yasyfa'u 'indahuu illaa bi-idznih, ya'lamu maa baina aidiihim wa maa khalfahum, wa laa yuhiithuuna bisyai-im min 'ilmihii illaa bimaa syaa', wasi'a kursiyyuhus-samaawaati wal-ardh, wa laa ya-uuduhuu hifzhuhumaa wa huwal-'aliyyul-'azhiim.",
        translation: "Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur...",
        keutamaan: "Barangsiapa membaca Ayat Kursi setiap selesai shalat fardhu, tidak ada yang menghalanginya masuk surga selain kematian. (Sebagian ulama & ijazah mengamalkan dibaca 7x untuk benteng kokoh).",
        dalil: "HR. An-Nasa'i dalam As-Sunan Al-Kubra no. 9928"
      },
      {
        id: "subuh-doa-nabi-yunus-7x",
        title: "7. Doa Nabi Yunus (7x atau 100x Pengentas Kesulitan)",
        type: "dzikir",
        targetCount: 7,
        arabic: "لَا إِلَهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
        latin: "Laa ilaaha illaa anta subhaanaka innii kuntu minazh-zhaalimiin.",
        translation: "Tidak ada Tuhan selain Engkau, Maha Suci Engkau, sesungguhnya aku termasuk orang-orang yang zalim.",
        keutamaan: "Doa di dalam perut ikan paus. Masyhur diamalkan 7x atau 100x sesudah Subuh untuk mengurai kesulitan hidup dan membuka pintu kelapangan.",
        dalil: "HR. At-Tirmidzi no. 3505 & QS. Al-Anbiya': 87"
      },
      {
        id: "subuh-ayat-1000-dinar-7x",
        title: "8. Ayat Seribu Dinar (7x - Pembuka Pintu Rezeki)",
        type: "bacaan",
        targetCount: 7,
        arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا ۝ وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ ۚ وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ ۚ إِنَّ اللَّهَ بَالِغُ أَمْرِهِ ۚ قَدْ جَعَلَ اللَّهُ لِكُلِّ شَيْءٍ قَدْرًا",
        latin: "Wa may yattaqillaaha yaj'al lahuu makhrajaa, wa yarzuqhu min haitsu laa yahtasib, wa may yatawakkal 'alallaahi fahuwa hasbuh, innallaaha baalighu amrih, qad ja'alallaahu likulli syai-in qadraa.",
        translation: "Barangsiapa bertakwa kepada Allah niscaya Dia akan membukakan jalan keluar baginya, dan Dia memberinya rezeki dari arah yang tidak disangka-sangkanya. Dan barangsiapa bertawakal kepada Allah, niscaya Allah akan mencukupkan (keperluan)nya...",
        keutamaan: "Masyhur diijazahkan para ulama dibaca 7x setiap selesai sholat Subuh agar Allah mengalirkan rezeki berkah dari arah yang tak terduga.",
        dalil: "QS. At-Talaq: 2-3"
      },
      {
        id: "subuh-sholawat-munjiyat-11x",
        title: "9. Sholawat Munjiyat (11x - Penyelamat & Terkabulnya Hajat)",
        type: "sholawat",
        targetCount: 11,
        arabic: "اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ صَلَاةً تُنْجِينَا بِهَا مِنْ جَمِيعِ الْأَهْوَالِ وَالْآفَاتِ، وَتَقْضِي لَنَا بِهَا جَمِيعَ الْحَاجَاتِ، وَتُطَهِّرُنَا بِهَا مِنْ جَمِيعِ السَّيِّئَاتِ، وَتَرْفَعُنَا بِهَا عِنْدَكَ أَعْلَى الدَّرَجَاتِ، وَتُبَلِّغُنَا بِهَا أَقْصَى الْغَايَاتِ، مِنْ جَمِيعِ الْخَيْرَاتِ فِي الْحَيَاةِ وَبَعْدَ الْمَمَاتِ",
        latin: "Allaahumma shalli 'alaa sayyidinaa Muhammadin shalaatan tunjiinaa bihaa min jamii'il-ahwaali wal-aafaat, wa taqdhii lanaa bihaa jamii'al-haajaat, wa tuthahhirunaa bihaa min jamii'is-sayyi-aat, wa tarfa'unaa bihaa 'indaka a'lad-darajaat, wa tuballighunaa bihaa aqshal-ghaayaat, min jamii'il-khairaati fil-hayaati wa ba'dal-mamaat.",
        translation: "Ya Allah, limpahkanlah rahmat kepada junjungan kami Nabi Muhammad, yang dengan sholawat itu Engkau menyelamatkan kami dari segala mara bahaya...",
        keutamaan: "Diamalkan 11x sesudah sholat Subuh untuk keselamatan dari marabahaya sepanjang hari dan dimudahkan terkabulnya hajat.",
        dalil: "Dala'ilul Khairat karya Syaikh Al-Jazuli"
      },
      {
        id: "subuh-yaa-mujib-55x",
        title: "10. Dzikir Asmaul Husna: Yaa Mujiib (55x)",
        type: "counter",
        targetCount: 55,
        arabic: "يَا مُجِيبُ",
        latin: "Yaa Mujiib (55x)",
        translation: "Wahai Dzat Yang Maha Mengabulkan Doa.",
        note: "Dibaca 55x agar permohonan dan proposal hidup diijabah Allah SWT.",
        dalil: "QS. Hud: 61"
      },
      {
        id: "subuh-al-muawwidzat",
        title: "11. Membaca Surat Al-Ikhlas, Al-Falaq, & An-Nas (3x Masing-masing)",
        type: "bacaan",
        targetCount: 3,
        items: [
          {
            name: "Surat Al-Ikhlas (3x)",
            arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
            latin: "Qul huwallahu ahad. Allahush-shamad. Lam yalid wa lam yuulad. Wa lam yakun lahu kufuwan ahad.",
            translation: "Katakanlah: Dialah Allah, Yang Maha Esa..."
          },
          {
            name: "Surat Al-Falaq (3x)",
            arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
            latin: "Qul a'uudzu birabbil-falaq...",
            translation: "Katakanlah: Aku berlindung kepada Tuhan Yang Menguasai subuh..."
          },
          {
            name: "Surat An-Nas (3x)",
            arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ",
            latin: "Qul a'uudzu birabbin-naas...",
            translation: "Katakanlah: Aku berlindung kepada Tuhannya manusia..."
          }
        ],
        dalil: "HR. Abu Daud no. 1523 & At-Tirmidzi no. 3575"
      },
      {
        id: "subuh-surat-al-waqiah",
        title: "12. Membaca Surat Al-Waqi'ah (Penangkal Kemiskinan)",
        type: "bacaan",
        arabic: "إِذَا وَقَعَتِ الْوَاقِعَةُ ۝ لَيْسَ لِوَقْعَتِهَا كَاذِبَةٌ ۝ خَافِضَةٌ رَّافِعَةٌ ۝ إِذَا رُجَّتِ الْأَرْضُ رَجًّا ۝ وَبُسَّتِ الْجِبَالُ بَسًّا ۝ فَكَانَتْ هَبَاءً مُّنبَثًّا",
        latin: "Idzaa waqa'atil-waaqi'ah. Laisa liwaq'atihaa kaadzibah. Khaafidhatur raafi'ah. Idzaa rujjatil-ardhu rajjaa. Wa bussatil-jibaalu bassaa. Fa kaanat habaa-am mumbats-tsaa...",
        translation: "Apabila terjadi hari kiamat, tidak seorang pun dapat berdusta tentang kejadiannya. (Kejadian itu) merendahkan (satu golongan) dan meninggikan (golongan yang lain)...",
        keutamaan: "Rasulullah bersabda: 'Barangsiapa membaca surat Al-Waqi'ah setiap malam (atau rutin sesudah Subuh), ia tidak akan ditimpa kefakiran selamanya.'",
        dalil: "HR. Ibnu Asakir & Al-Baihaqi dalam Syu'abul Iman no. 2269"
      },
      {
        id: "subuh-doa-penutup",
        title: "13. Doa Perlindungan & Permohonan Kebaikan Dunia Akhirat",
        type: "doa",
        arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ\n\nرَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
        latin: "Rabbanaa aatinaa fid-dunyaa hasanah wa fil-aakhirati hasanataw wa qinaa 'adzaaban-naar.\n\nRobbighfirlii wa liwaalidayya warhamhumaa kamaa robbayaanii shaghiiraa.",
        translation: "Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat dan lindungilah kami dari siksa neraka. Wahai Tuhanku, ampunilah aku dan kedua orang tuaku, sayangilah mereka berdua sebagaimana mereka telah mendidikku di waktu kecil.",
        dalil: "QS. Al-Baqarah: 201 & QS. Al-Isra': 24"
      }
    ]
  },
  {
    id: "dzuhur",
    name: "Sholat Dzuhur",
    arabicName: "صَلَاةُ الظُّهْر",
    rakaat: 4,
    time: "Matahari tergelincir ke barat hingga bayangan sama panjang dengan bendanya",
    color: "from-yellow-500/20 to-emerald-500/20",
    badgeColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-950/60 dark:text-yellow-300",
    description: "Sholat fardhu 4 rakaat di tengah hari ketika matahari mulai bergeser ke arah barat. Dianjurkan selalu diusahakan tepat waktu.",
    tataCaraRingkas: [
      "Berniat sholat fardhu Dzuhur 4 rakaat menghadap kiblat karena Allah Ta'ala.",
      "Rakaat 1 & 2 dikerjakan secara sirr (bacaan tidak dikeraskan), membaca Al-Fatihah dan surat pendek.",
      "Duduk tasyahhud awal pada akhir rakaat kedua.",
      "Rakaat 3 & 4 hanya membaca Al-Fatihah secara sirr.",
      "Duduk tasyahhud akhir pada rakaat keempat, membaca doa tasyahhud, sholawat, dan salam."
    ],
    keutamaan: [
      {
        title: "Waktu Pintu Langit Dibuka",
        desc: "Saat matahari tergelincir adalah saat pintu-pintu langit dibuka dan Allah menyukai amal shalih naik pada waktu itu.",
        dalil: "HR. At-Tirmidzi no. 478 dari Abdullah bin As-Sa'ib RA"
      },
      {
        title: "Ketenangan di Tengah Kesibukan",
        desc: "Mengambil jeda dari urusan dunia untuk menghadap Sang Pencipta mengembalikan ketenangan hati dan fokus jiwa.",
        dalil: "QS. Ar-Ra'd: 28 - 'Ingatlah, hanya dengan mengingat Allah hati menjadi tenteram.'"
      }
    ],
    referensi: "Kitab Al-Adzkar Imam An-Nawawi, Bulughul Maram, Shahih Muslim.",
    steps: [
      {
        id: "dzuhur-istighfar",
        title: "1. Istighfar & Permohonan Keselamatan",
        type: "dzikir",
        targetCount: 3,
        arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ\n\nاللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
        latin: "Astaghfirullaahal-'adziim alladzii laa ilaaha illaa huwal-hayyul-qayyuumu wa atuubu ilaih. (3x)\n\nAllaahumma antas-salaam wa minkas-salaam, tabaarakta yaa dzal-jalaali wal-ikraam.",
        translation: "Aku memohon ampun kepada Allah Yang Maha Agung... Ya Allah, Engkaulah As-Salam dan dari-Mu lah keselamatan...",
        dalil: "HR. Muslim no. 591"
      },
      {
        id: "dzuhur-tahlil",
        title: "2. Doa Ketauhidan & Penyerahan Diri",
        type: "dzikir",
        arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ",
        latin: "Laa ilaaha illallaahu wahdahu laa syariika lah, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli syai-in qadiir. Allaahumma laa maani'a limaa a'thaita wa laa mu'thiya limaa mana'ta wa laa yanfa'u dzal-jaddi minkal-jaddu.",
        translation: "Tiada Tuhan selain Allah semata, tiada sekutu bagi-Nya. Bagi-Nya segala kerajaan dan bagi-Nya segala puji, dan Dia Maha Kuasa atas segala sesuatu. Ya Allah, tidak ada yang dapat mencegah apa yang Engkau beri, dan tidak ada yang dapat memberi apa yang Engkau cegah, dan tidak bermanfaat kekayaan orang yang kaya dari siksaan-Mu.",
        dalil: "HR. Bukhari no. 844 & Muslim no. 593"
      },
      {
        id: "dzuhur-tasbih-tahmid-takbir",
        title: "3. Tasbih, Tahmid, & Takbir (33x)",
        type: "counter",
        subItems: [
          { name: "Tasbih (33x)", arabic: "سُبْحَانَ اللَّهِ", latin: "Subhaanallah", translation: "Maha Suci Allah", target: 33 },
          { name: "Tahmid (33x)", arabic: "الْحَمْدُ لِلَّهِ", latin: "Alhamdulillah", translation: "Segala puji bagi Allah", target: 33 },
          { name: "Takbir (33x)", arabic: "اللَّهُ أَكْبَرُ", latin: "Allahu Akbar", translation: "Allah Maha Besar", target: 33 }
        ],
        closingArabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        closingLatin: "Laa ilaaha illallaahu wahdahu laa syariika lah, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli syai-in qadiir.",
        closingTranslation: "Tiada Tuhan selain Allah semata, tiada sekutu bagi-Nya. Milik-Nya kerajaan dan segala puji, dan Dia Maha Kuasa atas segala sesuatu.",
        dalil: "HR. Muslim no. 597"
      },
      {
        id: "dzuhur-ayat-kursi",
        title: "4. Membaca Ayat Kursi",
        type: "bacaan",
        arabic: "اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
        latin: "Allaahu laa ilaaha illaa huwal-hayyul-qayyuum...",
        translation: "Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya)...",
        dalil: "HR. An-Nasa'i dalam As-Sunan Al-Kubra no. 9928"
      },
      {
        id: "dzuhur-muawwidzat",
        title: "5. Membaca Al-Ikhlas, Al-Falaq, & An-Nas (1x Masing-masing)",
        type: "bacaan",
        targetCount: 1,
        items: [
          { name: "Surat Al-Ikhlas (1x)", arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ ...", latin: "Qul huwallahu ahad...", translation: "Katakanlah: Dialah Allah, Yang Maha Esa..." },
          { name: "Surat Al-Falaq (1x)", arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ ...", latin: "Qul a'uudzu birabbil-falaq...", translation: "Katakanlah: Aku berlindung kepada Tuhan Yang Menguasai subuh..." },
          { name: "Surat An-Nas (1x)", arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ ...", latin: "Qul a'uudzu birabbin-naas...", translation: "Katakanlah: Aku berlindung kepada Tuhannya manusia..." }
        ],
        dalil: "HR. Abu Daud no. 1523"
      },
      {
        id: "dzuhur-doa-penutup",
        title: "6. Doa Permohonan Kebaikan & Kedua Orang Tua",
        type: "doa",
        arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ\n\nرَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
        latin: "Rabbanaa aatinaa fid-dunyaa hasanatan wa fil-aakhirati hasanatan wa qinaa 'adzaaban-naar.\n\nRobbighfirlii wa liwaalidayya warhamhumaa kamaa robbayaanii shaghiiraa.",
        translation: "Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat dan lindungilah kami dari siksa neraka. Wahai Tuhanku, ampunilah aku dan kedua orang tuaku, sayangilah mereka sebagaimana mereka menyayangiku sewaktu kecil.",
        dalil: "QS. Al-Baqarah: 201"
      }
    ]
  },
  {
    id: "ashar",
    name: "Sholat Ashar",
    arabicName: "صَلَاةُ الْعَصْر",
    rakaat: 4,
    time: "Ketika panjang bayangan sama dengan panjang benda hingga sebelum matahari menguning/terbenam",
    color: "from-orange-500/20 to-emerald-500/20",
    badgeColor: "bg-orange-100 text-orange-800 dark:bg-orange-950/60 dark:text-orange-300",
    description: "Sholat Wustha (pertengahan) yang sangat ditekankan penjagaannya di dalam Al-Qur'an. Waktu setelah Ashar dianjurkan memperbanyak istighfar & sholawat 100x menyambut petang.",
    tataCaraRingkas: [
      "Berniat sholat fardhu Ashar 4 rakaat menghadap kiblat karena Allah Ta'ala.",
      "Seluruh bacaan sholat dibaca secara sirr (pelan).",
      "Rakaat 1 dan 2 membaca Al-Fatihah dan surat pendek, diakhiri tasyahhud awal.",
      "Rakaat 3 dan 4 membaca Al-Fatihah saja.",
      "Duduk tasyahhud akhir dan salam."
    ],
    keutamaan: [
      {
        title: "Disebut Sebagai Sholat Wustha",
        desc: "Allah memerintahkan secara khusus untuk memelihara sholat ini.",
        dalil: "QS. Al-Baqarah: 238 - 'Peliharalah semua sholat dan sholat wustha (Ashar). Berdirilah untuk Allah (dalam sholatmu) dengan khusyuk.'"
      },
      {
        title: "Melihat Wajah Allah di Akhirat",
        desc: "Rasulullah SAW bersabda orang yang menjaga sholat sebelum terbit matahari (Subuh) dan sebelum terbenamnya (Ashar) dijanjikan melihat wajah Allah tanpa terhalang.",
        dalil: "HR. Bukhari no. 554 & Muslim no. 633"
      }
    ],
    referensi: "Shahih Bukhari, Shahih Muslim, Sunan Abi Dawud.",
    steps: [
      {
        id: "ashar-istighfar",
        title: "1. Istighfar & Permohonan Keselamatan",
        type: "dzikir",
        targetCount: 3,
        arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ\n\nاللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
        latin: "Astaghfirullaahal-'adziim alladzii laa ilaaha illaa huwal-hayyul-qayyuumu wa atuubu ilaih. (3x)\n\nAllaahumma antas-salaam wa minkas-salaam, tabaarakta yaa dzal-jalaali wal-ikraam.",
        translation: "Aku memohon ampun kepada Allah Yang Maha Agung... Ya Allah, Engkaulah As-Salam dan dari-Mu lah keselamatan...",
        dalil: "HR. Muslim no. 591"
      },
      {
        id: "ashar-tahlil",
        title: "2. Dzikir Tauhid & Perlindungan",
        type: "dzikir",
        arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَلَا نَعْبُدُ إِلَّا إِيَّاهُ",
        latin: "Laa ilaaha illallaahu wahdahu laa syariika lah, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli syai-in qadiir. Laa hawla wa laa quwwata illaa billaah, laa ilaaha illallaahu wa laa na'budu illaa iyyaah.",
        translation: "Tiada Tuhan selain Allah semata, tiada sekutu bagi-Nya. Bagi-Nya segala kerajaan dan bagi-Nya segala puji, dan Dia Maha Kuasa atas segala sesuatu...",
        dalil: "HR. Muslim no. 594"
      },
      {
        id: "ashar-tasbih-tahmid-takbir",
        title: "3. Tasbih, Tahmid, & Takbir (33x)",
        type: "counter",
        subItems: [
          { name: "Tasbih (33x)", arabic: "سُبْحَانَ اللَّهِ", latin: "Subhaanallah", translation: "Maha Suci Allah", target: 33 },
          { name: "Tahmid (33x)", arabic: "الْحَمْدُ لِلَّهِ", latin: "Alhamdulillah", translation: "Segala puji bagi Allah", target: 33 },
          { name: "Takbir (33x)", arabic: "اللَّهُ أَكْبَرُ", latin: "Allahu Akbar", translation: "Allah Maha Besar", target: 33 }
        ],
        closingArabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        closingLatin: "Laa ilaaha illallaahu wahdahu laa syariika lah, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli syai-in qadiir.",
        closingTranslation: "Tiada Tuhan selain Allah semata, tiada sekutu bagi-Nya. Milik-Nya kerajaan dan segala puji, dan Dia Maha Kuasa atas segala sesuatu.",
        dalil: "HR. Muslim no. 597"
      },
      {
        id: "ashar-ayat-kursi",
        title: "4. Membaca Ayat Kursi",
        type: "bacaan",
        arabic: "اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
        latin: "Allaahu laa ilaaha illaa huwal-hayyul-qayyuum...",
        translation: "Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus makhluk-Nya...",
        dalil: "HR. An-Nasa'i no. 9928"
      },
      {
        id: "ashar-sholawat-100x",
        title: "5. Sholawat Nabi SAW (100x - Amalan Petang)",
        type: "counter",
        targetCount: 100,
        arabic: "اللَّهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ",
        latin: "Allaahumma shalli 'alaa sayyidinaa Muhammad wa 'alaa aali sayyidinaa Muhammad (atau: Shallallaahu 'alaa Muhammad)",
        translation: "Ya Allah limpahkanlah rahmat kepada junjungan kami Nabi Muhammad beserta keluarganya.",
        note: "Masyhur dianjurkan dibaca 100x setelah sholat Ashar untuk kelapangan rezeki dan ketenangan hati menjelang petang.",
        dalil: "HR. At-Tirmidzi no. 484"
      },
      {
        id: "ashar-istighfar-100x",
        title: "6. Istighfar Petang (100x)",
        type: "counter",
        targetCount: 100,
        arabic: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
        latin: "Astaghfirullaaha wa atuubu ilaih.",
        translation: "Aku memohon ampun kepada Allah dan bertaubat kepada-Nya.",
        note: "Rasulullah SAW beristighfar dan bertaubat kepada Allah setiap hari lebih dari 70 hingga 100 kali.",
        dalil: "HR. Bukhari no. 6307 & HR. Muslim no. 2702"
      },
      {
        id: "ashar-doa-petang",
        title: "7. Doa Sambutan Sore / Petang",
        type: "doa",
        arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        latin: "Amsaynaa wa amsal-mulku lillaah, wal-hamdu lillaah, laa ilaaha illallaahu wahdahu laa syariika lah, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli syai-in qadiir.",
        translation: "Kami telah memasuki waktu sore dan kerajaan hanya milik Allah, segala puji bagi Allah. Tiada Tuhan selain Allah semata, tiada sekutu bagi-Nya. Milik-Nya kerajaan dan bagi-Nya segala puji, dan Dia Maha Kuasa atas segala sesuatu.",
        dalil: "HR. Muslim no. 2723"
      }
    ]
  },
  {
    id: "maghrib",
    name: "Sholat Maghrib",
    arabicName: "صَلَاةُ الْمَغْرِب",
    rakaat: 3,
    time: "Matahari terbenam hingga mega merah (syafaq ahmar) hilang dari ufuk barat",
    color: "from-rose-500/20 to-amber-500/20",
    badgeColor: "bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300",
    description: "Sholat fardhu 3 rakaat saat pergantian siang menuju malam, menandai masuknya malam hari dalam penanggalan Hijriyah. Dianjurkan memperbanyak bacaan Al-Qur'an dan doa perlindungan.",
    tataCaraRingkas: [
      "Berniat sholat fardhu Maghrib 3 rakaat menghadap kiblat karena Allah Ta'ala.",
      "Rakaat 1 dan 2 bacaan Al-Fatihah dan surat pendek dibaca keras (jahr).",
      "Duduk tasyahhud awal pada akhir rakaat kedua.",
      "Rakaat 3 membaca Al-Fatihah secara sirr (pelan).",
      "Duduk tasyahhud akhir dan salam."
    ],
    keutamaan: [
      {
        title: "Pergantian Hari Menuju Malam",
        desc: "Waktu ijabah doa dan permohonan perlindungan dari godaan syaithan yang bertebaran saat awal malam.",
        dalil: "HR. Bukhari no. 3280 & Muslim no. 2012"
      },
      {
        title: "Benteng dari Api Neraka",
        desc: "Membaca doa permohonan selamat dari neraka 7x setelah Maghrib menjamin perlindungan jika meninggal malam itu.",
        dalil: "HR. Abu Daud no. 5079 & Ahmad no. 17362"
      }
    ],
    referensi: "Kitab Al-Adzkar Imam An-Nawawi, Sunan Abi Dawud, Shahih Muslim.",
    steps: [
      {
        id: "maghrib-istighfar",
        title: "1. Istighfar & Permohonan Keselamatan",
        type: "dzikir",
        targetCount: 3,
        arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ\n\nاللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
        latin: "Astaghfirullaahal-'adziim alladzii laa ilaaha illaa huwal-hayyul-qayyuumu wa atuubu ilaih. (3x)\n\nAllaahumma antas-salaam wa minkas-salaam, tabaarakta yaa dzal-jalaali wal-ikraam.",
        translation: "Aku memohon ampun kepada Allah Yang Maha Agung... Ya Allah, Engkaulah As-Salam dan dari-Mu lah keselamatan...",
        dalil: "HR. Muslim no. 591"
      },
      {
        id: "maghrib-tahlil-10x",
        title: "2. Tahlil Khusus Maghrib (10x Sebelum Mengubah Posisi Kaki)",
        type: "dzikir",
        targetCount: 10,
        arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        latin: "Laa ilaaha illallaahu wahdahu laa syariika lah, lahul-mulku wa lahul-hamdu yuhyii wa yumiitu wa huwa 'alaa kulli syai-in qadiir.",
        translation: "Tiada Tuhan selain Allah semata, tiada sekutu bagi-Nya. Bagi-Nya segala kerajaan dan bagi-Nya segala puji, Dia Yang menghidupkan dan mematikan, dan Dia Maha Kuasa atas segala sesuatu.",
        note: "Dianjurkan dibaca 10x sebelum merubah posisi duduk tahiyyat akhir dan sebelum berbicara urusan duniawi.",
        dalil: "HR. Ahmad 4/227 & At-Tirmidzi no. 3474"
      },
      {
        id: "maghrib-lindung-neraka",
        title: "3. Doa Perlindungan dari Api Neraka (7x)",
        type: "doa",
        targetCount: 7,
        arabic: "اللَّهُمَّ أَجِرْنَا مِنَ النَّارِ",
        latin: "Allaahumma ajirnaa minan-naar (atau Allaahumma ajirnii minan-naar) - 7x",
        translation: "Ya Allah, lindungilah kami (aku) dari siksa api neraka.",
        note: "Rasulullah SAW bersabda jika dibaca 7x setelah Maghrib lalu wafat malam itu, Allah mencatat baginya keselamatan dari neraka.",
        dalil: "HR. Abu Daud no. 5079 & An-Nasa'i dalam Amalul Yaum wal Lailah no. 85"
      },
      {
        id: "maghrib-tasbih-tahmid-takbir",
        title: "4. Tasbih, Tahmid, & Takbir (33x Masing-masing)",
        type: "counter",
        subItems: [
          { name: "Tasbih (33x)", arabic: "سُبْحَانَ اللَّهِ", latin: "Subhaanallah", translation: "Maha Suci Allah", target: 33 },
          { name: "Tahmid (33x)", arabic: "الْحَمْدُ لِلَّهِ", latin: "Alhamdulillah", translation: "Segala puji bagi Allah", target: 33 },
          { name: "Takbir (33x)", arabic: "اللَّهُ أَكْبَرُ", latin: "Allahu Akbar", translation: "Allah Maha Besar", target: 33 }
        ],
        closingArabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        closingLatin: "Laa ilaaha illallaahu wahdahu laa syariika lah, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli syai-in qadiir.",
        closingTranslation: "Tiada Tuhan selain Allah semata, tiada sekutu bagi-Nya. Milik-Nya kerajaan dan segala puji, dan Dia Maha Kuasa atas segala sesuatu.",
        dalil: "HR. Muslim no. 597"
      },
      {
        id: "maghrib-ayat-kursi",
        title: "5. Membaca Ayat Kursi",
        type: "bacaan",
        arabic: "اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
        latin: "Allaahu laa ilaaha illaa huwal-hayyul-qayyuum...",
        translation: "Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus makhluk-Nya...",
        dalil: "HR. An-Nasa'i no. 9928"
      },
      {
        id: "maghrib-muawwidzat-3x",
        title: "6. Membaca Surat Al-Ikhlas, Al-Falaq, & An-Nas (3x Masing-masing)",
        type: "bacaan",
        targetCount: 3,
        items: [
          {
            name: "Surat Al-Ikhlas (3x)",
            arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
            latin: "Qul huwallahu ahad. Allahush-shamad. Lam yalid wa lam yuulad. Wa lam yakun lahu kufuwan ahad.",
            translation: "Katakanlah: 'Dialah Allah, Yang Maha Esa...'"
          },
          {
            name: "Surat Al-Falaq (3x)",
            arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ ۝ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝ وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ ۝ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
            latin: "Qul a'uudzu birabbil-falaq. Min syarri maa khalaq...",
            translation: "Katakanlah: 'Aku berlindung kepada Tuhan Yang Menguasai subuh...'"
          },
          {
            name: "Surat An-Nas (3x)",
            arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ۝ الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ",
            latin: "Qul a'uudzu birabbin-naas. Malikin-naas...",
            translation: "Katakanlah: 'Aku berlindung kepada Tuhannya manusia...'"
          }
        ],
        note: "Dibaca 3x saat Subuh dan Maghrib akan mencukupi dari segala keburukan dan gangguan sihir sepanjang malam.",
        dalil: "HR. At-Tirmidzi no. 3575 & Abu Daud no. 5082"
      },
      {
        id: "maghrib-baca-quran",
        title: "7. Membaca Al-Qur'an (Surat Al-Waqi'ah atau Surat Lain)",
        type: "bacaan",
        arabic: "إِذَا وَقَعَتِ الْوَاقِعَةُ ۝ لَيْسَ لِوَقْعَتِهَا كَاذِبَةٌ ۝ خَافِضَةٌ رَّافِعَةٌ",
        latin: "Idzaa waqa'atil-waaqi'ah. Laisa liwaq'atihaa kaadzibah...",
        translation: "Apabila terjadi hari kiamat, tidak seorang pun dapat berdusta tentang kejadiannya...",
        note: "Waktu antara Maghrib dan Isya adalah waktu yang sangat dianjurkan untuk membaca Al-Qur'an (terutama Al-Waqi'ah).",
        dalil: "HR. Al-Baihaqi no. 2269"
      },
      {
        id: "maghrib-doa-penutup",
        title: "8. Doa Perlindungan Keluarga & Orang Tua",
        type: "doa",
        arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا\n\nرَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
        latin: "Rabbanaa hab lanaa min azwaajinaa wa dzurriyyaatinaa qurrata a'yuniw waj'alnaa lil-muttaqiina imaamaa.\n\nRobbighfirlii wa liwaalidayya warhamhumaa kamaa robbayaanii shaghiiraa.",
        translation: "Ya Tuhan kami, anugerahkanlah kepada kami pasangan dan keturunan kami sebagai penyenang hati (kami), dan jadikanlah kami imam bagi orang-orang yang bertakwa. Ya Tuhanku, ampunilah aku dan kedua orang tuaku, sayangilah mereka sebagaimana mereka menyayangiku di waktu kecil.",
        dalil: "QS. Al-Furqan: 74 & QS. Al-Isra': 24"
      }
    ]
  },
  {
    id: "isya",
    name: "Sholat Isya",
    arabicName: "صَلَاةُ الْعِشَاء",
    rakaat: 4,
    time: "Hilangnya mega merah di barat hingga sepertiga malam pertama / tengah malam",
    color: "from-indigo-500/20 to-emerald-500/20",
    badgeColor: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300",
    description: "Sholat fardhu penutup waktu siang dan malam hari. Dianjurkan membaca Ayat Kursi & 2 ayat terakhir surat Al-Baqarah sebelum tidur.",
    tataCaraRingkas: [
      "Berniat sholat fardhu Isya 4 rakaat menghadap kiblat karena Allah Ta'ala.",
      "Rakaat 1 dan 2 bacaan Al-Fatihah dan surat dibaca bersuara keras (jahr).",
      "Duduk tasyahhud awal pada rakaat kedua.",
      "Rakaat 3 dan 4 membaca Al-Fatihah secara sirr (pelan).",
      "Duduk tasyahhud akhir, membaca tasyahhud, sholawat, dan salam.",
      "Disunnahkan dilanjutkan dengan sholat sunnah Ba'diyah Isya 2 rakaat."
    ],
    keutamaan: [
      {
        title: "Pahala Sholat Separuh Malam",
        desc: "Mengerjakan sholat Isya berjamaah pahalanya disamakan dengan mendirikan sholat selama separuh malam penuh.",
        dalil: "HR. Muslim no. 656 dari Utsman bin Affan RA"
      },
      {
        title: "Pembeda dari Orang Munafik",
        desc: "Shalat Isya dan Subuh adalah shalat yang paling berat bagi orang-orang munafik karena menuntut kesungguhan mengalahkan rasa kantuk dan lelah.",
        dalil: "HR. Bukhari no. 657 & Muslim no. 651"
      }
    ],
    referensi: "Kitab Al-Adzkar Imam An-Nawawi, Shahih Bukhari, Shahih Muslim.",
    steps: [
      {
        id: "isya-istighfar",
        title: "1. Istighfar & Permohonan Keselamatan",
        type: "dzikir",
        targetCount: 3,
        arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيَّ الْقَيُّومَ وَأَتُوبُ إِلَيْهِ\n\nاللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
        latin: "Astaghfirullaahal-'adziim alladzii laa ilaaha illaa huwal-hayyul-qayyuumu wa atuubu ilaih. (3x)\n\nAllaahumma antas-salaam wa minkas-salaam, tabaarakta yaa dzal-jalaali wal-ikraam.",
        translation: "Aku memohon ampun kepada Allah Yang Maha Agung... Ya Allah, Engkaulah As-Salam dan dari-Mu lah keselamatan...",
        dalil: "HR. Muslim no. 591"
      },
      {
        id: "isya-tahlil",
        title: "2. Dzikir Tauhid & Keselamatan",
        type: "dzikir",
        arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
        latin: "Laa ilaaha illallaahu wahdahu laa syariika lah, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli syai-in qadiir. Allaahumma a'innii 'alaa dzikrika wa syukrika wa husni 'ibaadatik.",
        translation: "Tiada Tuhan selain Allah semata, tiada sekutu bagi-Nya. Bagi-Nya segala kerajaan dan bagi-Nya segala puji, dan Dia Maha Kuasa atas segala sesuatu. Ya Allah, bantulah aku untuk senantiasa mengingat-Mu, bersyukur kepada-Mu, dan beribadah dengan baik kepada-Mu.",
        dalil: "HR. Abu Daud no. 1522"
      },
      {
        id: "isya-tasbih-tahmid-takbir",
        title: "3. Tasbih, Tahmid, & Takbir (33x)",
        type: "counter",
        subItems: [
          { name: "Tasbih (33x)", arabic: "سُبْحَانَ اللَّهِ", latin: "Subhaanallah", translation: "Maha Suci Allah", target: 33 },
          { name: "Tahmid (33x)", arabic: "الْحَمْدُ لِلَّهِ", latin: "Alhamdulillah", translation: "Segala puji bagi Allah", target: 33 },
          { name: "Takbir (33x)", arabic: "اللَّهُ أَكْبَرُ", latin: "Allahu Akbar", translation: "Allah Maha Besar", target: 33 }
        ],
        closingArabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        closingLatin: "Laa ilaaha illallaahu wahdahu laa syariika lah, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli syai-in qadiir.",
        closingTranslation: "Tiada Tuhan selain Allah semata, tiada sekutu bagi-Nya. Milik-Nya kerajaan dan segala puji, dan Dia Maha Kuasa atas segala sesuatu.",
        dalil: "HR. Muslim no. 597"
      },
      {
        id: "isya-ayat-kursi",
        title: "4. Membaca Ayat Kursi",
        type: "bacaan",
        arabic: "اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ",
        latin: "Allaahu laa ilaaha illaa huwal-hayyul-qayyuum...",
        translation: "Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus makhluk-Nya...",
        dalil: "HR. An-Nasa'i no. 9928"
      },
      {
        id: "isya-dua-ayat-al-baqarah",
        title: "5. Membaca 2 Ayat Terakhir Surat Al-Baqarah (Amanar Rasul)",
        type: "bacaan",
        arabic: "آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ ۝ لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ۖ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ۚ أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
        latin: "Aamanar-rasuulu bimaa unzila ilaihi mir-rabbihii wal-mu'minuun, kullun aamana billaahi wa malaa-ikatihii wa kutubihii wa rusulih, laa nufarriqu baina ahadim mir-rusulih, wa qaaluu sami'naa wa atha'naa ghufraanaka rabbanaa wa ilaikal-mashiir. Laa yukallifullaahu nafsan illaa wus'ahaa...",
        translation: "Rasul telah beriman kepada apa yang diturunkan kepadanya dari Tuhannya, demikian pula orang-orang yang beriman... Maafkanlah kami, ampunilah kami, dan rahmatilah kami. Engkaulah Pelindung kami, maka tolonglah kami menghadapi kaum yang kafir.",
        keutamaan: "Barangsiapa membaca dua ayat terakhir surat Al-Baqarah di malam hari (setelah Isya), niscaya keduanya mencukupinya dari segala keburukan dan marabahaya.",
        dalil: "HR. Bukhari no. 5009 & HR. Muslim no. 808"
      },
      {
        id: "isya-doa-penutup",
        title: "6. Doa Husnul Khatimah & Kebaikan Akhirat",
        type: "doa",
        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ حُسْنَ الْخَاتِمَةِ، وَأَعُوذُ بِكَ مِنْ سُوءِ الْخَاتِمَةِ، رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
        latin: "Allaahumma innii as-aluka husnal-khaatimah, wa a'uudzu bika min suu-il-khaatimah. Rabbanaa aatinaa fid-dunyaa hasanatan wa fil-aakhirati hasanatan wa qinaa 'adzaaban-naar.",
        translation: "Ya Allah, sesungguhnya aku memohon kepada-Mu husnul khatimah (akhir hidup yang baik) dan aku berlindung kepada-Mu dari su'ul khatimah (akhir hidup yang buruk)...",
        dalil: "HR. Bukhari & Muslim"
      }
    ]
  }
];
