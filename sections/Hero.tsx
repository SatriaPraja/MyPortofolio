"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TranslationData } from '@/lib/languages';


interface HeroProps {
  t: TranslationData['hero'];
}

export default function Hero({ t }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-[#0a0a0c] transition-colors duration-500">
      
      {/* --- BACKGROUND LAYER (GRID & GLOW) --- */}
      <div className="absolute inset-0 z-0">
        {/* Background Grid modern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Glow Effects (Blob warna-warni) */}
        <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16 z-10">
        
        {/* --- LEFT SIDE: TEXT CONTENT --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left relative"
        >
          {/* Label Kecil Dekoratif */}
          <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 mb-4 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md">
            <span className="text-blue-500 text-xs font-bold uppercase tracking-widest leading-none">{t.greeting}</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
            Satria <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-500">
              Duta Praja
            </span>
          </motion.h1>
          
          <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 font-medium">
            {t.role}
          </motion.h3>
          
          <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 mb-10 max-w-xl leading-relaxed text-lg">
            {t.tagline}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-5 justify-center md:justify-start">
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-blue-500/20"
            >
              {t.ctaProject}
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, borderColor: "#3b82f6" }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="group border-2 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white px-10 py-4 rounded-2xl font-bold transition-all flex items-center gap-2 backdrop-blur-sm"
            >
              {t.ctaContact}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* --- RIGHT SIDE: IMAGE & DECORATION --- */}
        <div className="flex-1 relative flex justify-center items-center">
          
          {/* Animated Orbit Rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[350px] h-[350px] md:w-[480px] md:h-[480px] border-t-2 border-l-2 border-blue-500/20 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] border-b-2 border-r-2 border-purple-500/20 rounded-full"
          />

          {/* --- FLOATING TECH BADGES --- */}
          {[
            { label: 'Flutter', pos: 'top-0 left-0', color: 'text-blue-400', delay: 0 },
            { label: 'Laravel', pos: 'top-10 -right-4', color: 'text-red-500', delay: 0.5 },
            { label: 'Kotlin', pos: 'bottom-20 -left-12', color: 'text-purple-400', delay: 1 },
            { label: 'Next.js', pos: 'bottom-4 right-4', color: 'text-gray-400', delay: 1.5 }
          ].map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: tech.delay, ease: "easeInOut" }}
              className={`absolute ${tech.pos} z-30 hidden sm:flex items-center gap-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl px-4 py-2 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-2xl`}
            >
              <div className={`w-2 h-2 rounded-full bg-current ${tech.color}`} />
              <span className="text-[10px] font-black uppercase dark:text-white tracking-tighter">{tech.label}</span>
            </motion.div>
          ))}

          {/* --- MAIN IMAGE --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className="relative w-64 h-64 md:w-96 md:h-96"
          >
            {/* Glossy Shape di belakang foto */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[3rem] rotate-12 opacity-10 animate-pulse" />
            
            {/* Photo Container */}
            <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] border-[6px] border-white dark:border-gray-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] z-20 group">
              <Image 
                src="/assets/profil6.png"
                alt="Satria" 
                fill 
                className="object-cover object-top group-hover:scale-110 transition-transform duration-700" 
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Float Stats/Card */}
            <motion.div 
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-12 z-30 bg-white dark:bg-gray-900 p-5 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 hidden md:block"
            >
              <p className="text-3xl font-black text-blue-600 leading-none">2+</p>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Years Experience</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* --- SCROLL INDICATOR --- */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30"
      >
        <span className="text-[10px] uppercase font-bold tracking-[0.3em] dark:text-white">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-600 to-transparent" />
      </motion.div>

    </section>
  );
}