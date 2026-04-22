"use client";

import { projectsList } from '@/lib/projects-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { FiArrowLeft, FiGithub, FiCheck, FiCpu, FiLayers } from 'react-icons/fi';
import { FaGooglePlay } from 'react-icons/fa';
import { use } from 'react';

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = projectsList.find((p) => p.id === id);

  if (!project) notFound();

  // Animasi dasar untuk setiap elemen
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } 
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-[#050505] text-gray-900 dark:text-white selection:bg-blue-500/30 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 py-10 lg:py-16">
        
        {/* Navigation - Animasi Slide In */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
          <Link href="/#projects" className="flex items-center gap-2 group text-sm font-bold opacity-60 hover:opacity-100 transition-opacity">
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Showcase
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* SISI KIRI: Konten Utama */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="lg:col-span-7 space-y-12 pb-20"
          >
            {/* Header Deskripsi - Tanpa Logo */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl lg:text-5xl font-black tracking-tighter mb-4 leading-tight">
                {project.title}
              </h1>
              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl font-medium">
                {project.fullDesc}
              </p>
            </motion.div>

            {/* Section Teknologi - Dengan animasi hover per item */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3 text-blue-500 uppercase font-black text-[10px] tracking-[0.2em]">
                <FiCpu size={16} />
                <span>Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {project.tech.map((t, idx) => (
                  <motion.span 
                    key={t}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-5 py-2.5 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-sm md:text-base font-bold shadow-sm cursor-default"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Section Fitur Utama */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-3 text-blue-500 uppercase font-black text-[10px] tracking-[0.2em]">
                <FiLayers size={16} />
                <span>Key Features</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features?.map((f, i) => (
                  <motion.div 
                    key={i}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="p-6 rounded-3xl bg-white dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-2 text-blue-600">
                      <div className="p-1.5 rounded-full bg-blue-500/10">
                        <FiCheck size={16} strokeWidth={4} />
                      </div>
                      <h3 className="font-bold text-base uppercase tracking-tight">{f.title}</h3>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                      {f.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

{/* CTA Buttons */}
<motion.div variants={itemVariants} className="pt-4 flex flex-col sm:flex-row gap-6 items-start sm:items-center">
  
  {/* Kondisi Play Store: Hanya muncul jika ada link */}
  {project.playstore !== "#" && (
    <motion.a 
      whileHover={{ 
        scale: 1.03, 
        boxShadow: "0 20px 25px -5px rgba(37, 99, 235, 0.2)" 
      }}
      whileTap={{ scale: 0.97 }}
      href={project.playstore} 
      target="_blank"
      className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-600/10 transition-all"
    >
      <FaGooglePlay size={24} />
      <div className="text-left">
        <p className="text-[9px] uppercase font-black opacity-70 leading-none tracking-widest">Get it on</p>
        <p className="text-xl font-black leading-none mt-1">Google Play</p>
      </div>
    </motion.a>
  )}
  
  <motion.a 
    whileHover={{ opacity: 1, x: 5 }}
    href={project.github} 
    target="_blank"
    className="flex items-center gap-2 text-sm font-bold opacity-40 hover:opacity-100 transition-all"
  >
    <FiGithub size={20} /> View Github Repository
  </motion.a>
</motion.div>
          </motion.div>

          {/* SISI KANAN: App Mockup */}
          <div className="hidden lg:block lg:col-span-5 self-stretch relative">
            <div className="sticky top-0 h-screen flex items-center justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[310px] xl:max-w-[340px]"
              >
                {/* Frame HP Premium */}
                <div className="relative border-[10px] border-gray-900 dark:border-[#1a1a1a] rounded-[3.5rem] h-[640px] xl:h-[700px] w-full shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] bg-gray-900 overflow-hidden z-10">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-gray-900 rounded-b-3xl z-20" />
                  <Image 
                    src={project.image} 
                    alt="App Preview" 
                    fill 
                    className="object-cover" 
                    priority 
                  />
                </div>
                {/* Ambient Glow */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[70%] bg-blue-500 blur-[100px] rounded-full -z-0" 
                />
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}