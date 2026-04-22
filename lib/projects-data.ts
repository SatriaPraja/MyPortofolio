export interface Project {
  id: string;
  title: string;
  desc: string;
  fullDesc: string;
  tech: string[];
  image: string;
  github: string;
  playstore: string;
  demo: string;
  features : ProjectFeature[]

  
}
export interface ProjectFeature {
  title: string;
  desc: string;
}
export const projectsList: Project[] = [
  {
    id: "sobat-berbagi",
    title: "Sobat Berbagi",
    desc: "Aplikasi Crowdfunding & Lifestyle Muslim untuk Lazismu Banyumas.",
    fullDesc: "Sobat Berbagi adalah platform crowdfunding resmi Lazismu Banyumas yang mengintegrasikan sistem donasi digital dengan fitur gaya hidup Muslim. Aplikasi ini dibangun menggunakan Flutter dengan fokus pada kemudahan akses zakat, infaq, dan sedekah, serta mendukung ibadah harian melalui fitur spiritual yang lengkap.",
    features: [
      { title: "Zakat & Donation", desc: "Kalkulator zakat otomatis dan sistem pembayaran donasi campaign yang diperbarui setiap bulan." },
      { title: "Sobat Muslim", desc: "Fitur Al-Qur'an digital, tasbih, doa-doa, dan penentu arah kiblat dalam satu genggaman." },
      { title: "Smart Notification", desc: "Pengingat waktu sholat real-time berdasarkan lokasi pengguna untuk menjaga ibadah." },
      { title: "Auth & Google Sync", desc: "Sistem login yang aman dan praktis menggunakan Firebase Auth dan integrasi akun Google." },
      { title: "Transaction History", desc: "Transparansi data melalui riwayat zakat dan donasi yang terintegrasi langsung via API." },
      { title: "Article Center", desc: "Wawasan keislaman melalui artikel rutin yang diterbitkan langsung oleh Lazismu Banyumas." }
    ],
    tech: ["Flutter", "Laravel", "Firebase", "REST API", "Cloud Messaging"],
    image: "/assets/projects/sober.jpeg",
    github: "https://github.com/SatriaPraja",
    playstore: "https://play.google.com/store/apps/details?id=com.lazismubms.sobatberbagi",
    demo: "https://play.google.com/store/apps/details?id=com.lazismubanyumas.sobatberbagi"
  },
  {
    id: "nike-store",
    title: "Nike Store Mobile",
    desc: "E-commerce UI/UX Experience dengan performa tinggi.",
    fullDesc: "Sebuah aplikasi marketplace sepatu yang berfokus pada pengalaman visual yang premium. Mengimplementasikan animasi transisi yang halus, manajemen keranjang belanja, dan sistem katalog produk yang dinamis.",
    features: [
      { title: "Parallax Scrolling", desc: "Efek visual pada produk unggulan untuk meningkatkan estetika aplikasi." },
      { title: "Cart Management", desc: "Sistem pengelolaan keranjang belanja yang responsif dengan kalkulasi pajak dan ongkir otomatis." },
      { title: "Advanced Filtering", desc: "Pencarian produk berdasarkan kategori, ukuran, dan rentang harga secara instan." }
    ],
    tech: ["Flutter", "Riverpod", "Animations", "Stripe API"],
    image: "/assets/projects/nike.jpeg",
    github: "https://github.com/SatriaPraja",
    playstore: "#",
    demo: "#"
  },
  {
    id: "instagram-ui",
    title: "Instagram Redesign",
    desc: "Clone UI Instagram dengan optimasi performa rendering.",
    fullDesc: "Eksperimen UI/UX untuk mereplikasi fitur utama Instagram. Proyek ini mendalami teknik caching gambar yang efisien dan implementasi sistem 'Stories' yang interaktif menggunakan Flutter.",
    features: [
      { title: "Dynamic Stories", desc: "Implementasi bar cerita yang dapat diklik dengan transisi antar gambar yang cepat." },
      { title: "Complex Feed Layout", desc: "Rendering feed berita dengan berbagai macam media (gambar & video) tanpa lag." },
      { title: "Profile Interaction", desc: "Halaman profil dengan grid sistem yang rapi dan navigasi tab yang intuitif." }
    ],
    tech: ["Flutter", "Dart", "Cached Network Image", "State Management"],
    image: "/assets/projects/ig.jpeg",
    github: "https://github.com/SatriaPraja",
    playstore: "#",
    demo: "#"
  },
  {
    id: "todo-pro",
    title: "Task Management App",
    desc: "Aplikasi produktivitas untuk manajemen tugas harian.",
    fullDesc: "Aplikasi Todo yang melampaui daftar tugas biasa. Dilengkapi dengan manajemen kategori, prioritas tugas, dan penyimpanan lokal (Offline-first) sehingga data tetap aman tanpa koneksi internet.",
    features: [
      { title: "Offline Support", desc: "Data tetap tersimpan di perangkat menggunakan SQL meskipun tanpa koneksi internet." },
      { title: "Task Priority", desc: "Pengelompokan tugas berdasarkan urgensi dengan kode warna yang memudahkan user." },
      { title: "Dark Mode Support", desc: "Dukungan penuh untuk tema gelap guna kenyamanan mata saat penggunaan di malam hari." }
    ],
    tech: ["Kotlin", "SQLite", "Room Database", "Material Design 3"],
    image: "/assets/projects/todo.jpeg",
    github: "https://github.com/SatriaPraja",
    playstore: "#",
    demo: "#"
  },
  {
    id: "cinematix",
    title: "Cinematix",
    desc: "Platform eksplorasi film modern dengan integrasi database global.",
    fullDesc: "Cinematix adalah aplikasi katalog film yang memungkinkan pengguna untuk menjelajahi ribuan judul film dan serial TV. Aplikasi ini berfokus pada pengalaman visual yang sinematik, memanfaatkan integrasi API dari TMDB untuk menyajikan data real-time seperti rating, trailer, dan daftar pemeran.",
    features: [
      { title: "Real-time Discovery", desc: "Menampilkan film yang sedang tren, populer, dan akan datang secara otomatis dari database global." },
      { title: "Watchlist System", desc: "Memungkinkan pengguna menyimpan daftar film yang ingin ditonton secara lokal di perangkat." },
      { title: "Detailed Insights", desc: "Informasi mendalam mulai dari sinopsis, genre, budget, hingga video trailer resmi di setiap halaman film." },
      { title: "Smart Search", desc: "Fitur pencarian instan yang cerdas untuk menemukan film berdasarkan judul atau nama aktor." }
    ],
    tech: ["Flutter", "REST API (TMDB)", "Provider", "Shared Preferences", "Dio"],
    image: "/assets/projects/cinematix.png",
    github: "https://github.com/SatriaPraja",
    playstore: "#",
    demo: "#"
  }
];