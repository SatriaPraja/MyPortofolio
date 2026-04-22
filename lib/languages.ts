export const translations = {
  id: {
    hero: {
      greeting: "Halo, nama saya",
      role: "Mobile & Flutter Developer",
      tagline: "Membangun aplikasi mobile yang performan dan elegan dengan fokus pada pengalaman pengguna yang luar biasa.",
      ctaProject: "Lihat Project",
      ctaContact: "Hubungi Saya",
    },
    about: {
      title: "Tentang",
      titleAccent: "Saya",
      desc1: "Saya adalah seorang Mobile Developer yang berfokus pada ekosistem Flutter dan Dart.",
      exp: "Tahun Pengalaman",
      projectCount: "Proyek Selesai",
    },
    skills: {
      title: "Keahlian",
      titleAccent: "Teknis",
    },
    projects: {
      title: "Proyek",
      titleAccent: "Terbaru",
    },
    contact: {
      title: "Hubungi",
      titleAccent: "Saya",
      sub: "Punya pertanyaan atau ingin bekerja sama?",
      button: "Kirim Pesan",
    }
  },
  en: {
    hero: {
      greeting: "Hi, my name is",
      role: "Mobile & Flutter Developer",
      tagline: "Building high-performance and elegant mobile applications with a focus on exceptional user experience.",
      ctaProject: "View Projects",
      ctaContact: "Contact Me",
    },
    about: {
      title: "About",
      titleAccent: "Me",
      desc1: "I am a Mobile Developer focusing on the Flutter and Dart ecosystem.",
      exp: "Years Experience",
      projectCount: "Projects Completed",
    },
    skills: {
      title: "Technical",
      titleAccent: "Skills",
    },
    projects: {
      title: "Latest",
      titleAccent: "Projects",
    },
    contact: {
      title: "Contact",
      titleAccent: "Me",
      sub: "Have a question or want to work together?",
      button: "Send Message",
    }
  }
};

// Ekspor tipe setelah variabel didefinisikan
export type TranslationData = typeof translations.id;