"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { TranslationData } from '@/lib/languages';

// Import Data dan Komponen yang sudah kamu buat
import { projectsList } from '@/lib/projects-data'; 
import ProjectCard from '@/components/ProjectCard';

interface ProjectsProps {
  t: TranslationData['projects'];
}

export default function Projects({ t }: ProjectsProps) {
  const [showAll, setShowAll] = useState(false);

  // Menentukan berapa banyak project yang tampil
  const visibleProjects = showAll ? projectsList : projectsList.slice(0, 3);

  return (
    <section id="projects" className="relative py-24 bg-white dark:bg-[#0a0a0c] transition-colors duration-500 overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md"
            >
              <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em]">Portfolio</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white"
            >
              {t.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{t.titleAccent}</span>
            </motion.h2>
          </div>

          {/* Toggle Button Desktop */}
          <motion.button 
            whileHover={{ x: 5 }}
            onClick={() => setShowAll(!showAll)}
            className="hidden md:flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 group"
          >
            {showAll ? 'Show Less' : 'Explore All Work'}
            <span className="p-2 rounded-full border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-all">
              <FiArrowRight className={showAll ? 'rotate-180 transition-transform' : 'transition-transform'} />
            </span>
          </motion.button>
        </div>

        {/* Projects Grid - Menggunakan Komponen ProjectCard */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((item) => (
              <ProjectCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Mobile Toggle Button */}
        <div className="mt-16 flex justify-center md:hidden">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 text-white font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-blue-600/30 active:scale-95 transition-all"
          >
            {showAll ? 'Show Less' : 'View All Projects'}
            <FiArrowRight className={showAll ? 'rotate-180 transition-transform' : 'transition-transform'} />
          </button>
        </div>

      </div>
    </section>
  );
}