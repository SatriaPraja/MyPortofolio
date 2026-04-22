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
      subtitle: "Membangun Solusi Digital dengan Presisi",
      desc1: "Saya adalah seorang Mobile Developer yang berdedikasi dengan spesialisasi dalam ekosistem Flutter dan Dart. Saya memiliki fokus mendalam pada pembuatan aplikasi lintas platform yang tidak hanya berperforma tinggi, tetapi juga memiliki estetika yang elegan.",
      desc2: "Perjalanan saya melibatkan pengelolaan seluruh siklus hidup aplikasi, mulai dari perancangan antarmuka di Figma hingga proses deployment yang kompleks di Google Play Store. Saya percaya pada pendekatan 'build-and-test' untuk memastikan setiap kode yang saya tulis aman dan skalabel.",
      quote: "Fokus saya adalah mengubah ide kompleks menjadi pengalaman pengguna yang intuitif dan fungsional.",
      exp: "Tahun Pengalaman",
      projectCount: "Proyek Selesai",
      journeyTitle: "Perjalanan Karier",
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
      subtitle: "Crafting Digital Solutions with Precision",
      desc1: "I am a dedicated Mobile Developer specializing in the Flutter and Dart ecosystem. I have a deep focus on creating cross-platform applications that are not only high-performing but also aesthetically elegant.",
      desc2: "My journey involves managing the entire application lifecycle, from designing interfaces in Figma to complex deployment processes on the Google Play Store. I believe in a 'build-and-test' approach to ensure every code I write is secure and scalable.",
      quote: "My focus is on turning complex ideas into intuitive and functional user experiences.",
      exp: "Years Experience",
      projectCount: "Projects Completed",
      journeyTitle: "Professional Journey",
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