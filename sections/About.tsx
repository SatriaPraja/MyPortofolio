"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TranslationData } from '@/lib/languages';

// Import gambar langsung dari folder assets
// Sesuaikan path ../ jika posisi folder assets berbeda
import profil from '@/assets/profil5.jpeg';

interface AboutProps {
  t: TranslationData['about'];
}

export default function About({ t }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Bagian Gambar */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="relative w-full aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl">
              <Image 
                src={profil} // Menggunakan variabel profil2 hasil import
                alt="About Me" 
                fill 
                className="object-cover"
                placeholder="blur" // Menambahkan efek blur saat loading otomatis
              />
            </div>
          </motion.div>
          
          {/* Bagian Teks */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              {t.title} <span className="text-blue-500">{t.titleAccent}</span>
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              {t.desc1}
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed italic">
              Berdasarkan pengalaman saya mengelola siklus hidup aplikasi dari pengembangan hingga rilis di Play Store.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Card Statistik 1 */}
              <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
                <h4 className="text-blue-500 font-bold text-xl">1+</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{t.exp}</p>
              </div>
              
              {/* Card Statistik 2 */}
              <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
                <h4 className="text-blue-500 font-bold text-xl">10+</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{t.projectCount}</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}