"use client";
import { motion } from 'framer-motion';
import { FiGithub, FiArrowUpRight } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/projects-data';

export default function ProjectCard({ item }: { item: Project }) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      className="group relative flex flex-col h-full bg-gray-50 dark:bg-white/5 rounded-[2.5rem] border border-gray-100 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
    >
      <Link href={`/projects/${item.id}`} className="relative h-60 w-full overflow-hidden block">
        <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <FiArrowUpRight size={24} />
          </div>
        </div>
      </Link>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <Link href={`/projects/${item.id}`}>
            <h3 className="text-xl font-black text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors">{item.title}</h3>
          </Link>
          <a href={item.github} target="_blank" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"><FiGithub size={20} /></a>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-8 line-clamp-2">{item.desc}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {item.tech.map(t => (
            <span key={t} className="text-[10px] font-black uppercase tracking-widest bg-white dark:bg-white/10 text-gray-600 dark:text-gray-300 px-4 py-1.5 rounded-full border border-gray-100 dark:border-white/5">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}