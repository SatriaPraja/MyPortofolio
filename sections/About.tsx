"use client";
import { motion } from 'framer-motion';
import { TranslationData } from '@/lib/languages';

interface AboutProps {
  t: TranslationData['about'];
}

export default function About({ t }: AboutProps) {
  // Konten tambahan yang diambil dari data profil terbaru untuk memperkaya visual
  const profileDetails = [
    { label: "Location", val: "Jawa Tengah, ID", icon: "📍" },
    { label: "Status", val: "Available for Projects", icon: "🟢" },
    { label: "Focus", val: "User-Centric Dev", icon: "🎯" },
    { label: "Method", val: "Build & Test", icon: "🛠️" },
  ];

  return (
    <section id="about" className="relative py-20 bg-white dark:bg-[#0a0a0c] transition-colors duration-500 overflow-hidden">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* --- TOP: CENTRAL NARRATIVE --- */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md"
          >
            <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em]">{t.title}</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white leading-[1.1] mb-10"
          >
            {t.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500">{t.titleAccent}</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-light leading-relaxed">
              {t.desc1}
            </p>
            <p className="text-base md:text-lg text-gray-500 dark:text-gray-500 leading-relaxed max-w-3xl mx-auto">
              {t.desc2}
            </p>
          </motion.div>
        </div>

        {/* --- BOTTOM: MODERN BENTO GRID --- */}
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Main Quote Card (Full Height) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:col-span-2 p-10 rounded-[3rem] bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute -right-10 -bottom-10 opacity-[0.03] dark:opacity-[0.05] group-hover:scale-110 transition-transform duration-700">
              <svg width="300" height="300" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3H21.017C21.5693 3 22.017 3.44772 22.017 4V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.01697 21L3.01697 18C3.01697 16.8954 3.9124 16 5.01697 16H8.01697C8.56925 16 9.01697 15.5523 9.01697 15V9C9.01697 8.44772 8.56925 8 8.01697 8H5.01697C3.9124 8 3.01697 7.10457 3.01697 6V3H10.017C10.5693 3 11.017 3.44772 11.017 4V15C11.017 18.3137 8.33068 21 5.01697 21H3.01697Z"/></svg>
            </div>
            <p className="text-2xl md:text-3xl font-serif italic text-gray-800 dark:text-gray-200 leading-snug relative z-10">
              "{t.quote}"
            </p>
            <div className="mt-8 flex items-center gap-4">
               <div className="w-10 h-1px bg-blue-500"></div>
               <span className="text-xs font-black uppercase tracking-widest text-blue-500">Visionary Mindset</span>
            </div>
          </motion.div>

          {/* Stats & Quick Info (Stacked) */}
          <div className="space-y-6">
            {/* Stats Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-8 rounded-[2.5rem] bg-blue-600 dark:bg-blue-600 text-white shadow-xl shadow-blue-500/20"
            >
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="text-5xl font-black mb-1">2+</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">{t.exp}</p>
                </div>
                <div className="text-right">
                  <h4 className="text-5xl font-black mb-1">10+</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">{t.projectCount}</p>
                </div>
              </div>
            </motion.div>

            {/* Quick Details List */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-8 rounded-[2.5rem] bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10"
            >
              <div className="grid grid-cols-1 gap-5">
                {profileDetails.map((detail, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{detail.icon}</span>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{detail.label}</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900 dark:text-gray-100">{detail.val}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}