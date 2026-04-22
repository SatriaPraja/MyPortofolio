"use client";
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';
import { TranslationData } from '@/lib/languages';

interface ProjectsProps {
  t: TranslationData['projects'];
}

export default function Projects({ t }: ProjectsProps) {
  // Data project biasanya statis atau dari CMS, tapi kita gunakan dummy di sini
  const projectsList = [
    {
      title: "Sobat Berbagi",
      desc: "Aplikasi mobile untuk platform sosial dan donasi.",
      tech: ["Flutter", "Laravel", "Firebase"],
      image: "https://placehold.co/400x250",
      github: "#",
      demo: "#"
    },
    // ... data lainnya
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
          {t.title} <span className="text-blue-500">{t.titleAccent}</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all group shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{item.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tech.map(techName => (
                    <span key={techName} className="text-[10px] uppercase tracking-wider bg-blue-500/10 text-blue-500 px-2 py-1 rounded-md border border-blue-500/20 font-bold">{techName}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={item.github} className="text-gray-500 hover:text-blue-500 transition-colors"><FiGithub size={20} /></a>
                  <a href={item.demo} className="text-gray-500 hover:text-blue-500 transition-colors"><FiExternalLink size={20} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}