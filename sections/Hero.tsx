"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TranslationData } from '@/lib/languages';

interface HeroProps {
  t: TranslationData['hero'];
}

export default function Hero({ t }: HeroProps) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-blue-500 font-semibold mb-2">{t.greeting}</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">Satria Duta Praja</h1>
          <h3 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6">{t.role}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
            {t.tagline}
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg shadow-blue-900/20">
              {t.ctaProject}
            </a>
            <a href="#contact" className="border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:border-blue-500 px-8 py-3 rounded-full font-medium transition-all">
              {t.ctaContact}
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 relative mx-auto overflow-hidden rounded-full border-4 border-blue-500/30 shadow-2xl">
            <Image src="https://placehold.co/600x400" alt="Satria" fill className="object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}