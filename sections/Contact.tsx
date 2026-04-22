"use client";

import { TranslationData } from '@/lib/languages';
import { motion, Variants } from 'framer-motion'; // Tambahkan Variants di sini
import { FiMail, FiLinkedin, FiGithub, FiArrowUpRight } from 'react-icons/fi';

interface ContactProps {
  t: TranslationData['contact'];
}

export default function Contact({ t }: ContactProps) {
  
  // Pastikan tipe data Variants didefinisikan secara eksplisit
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.2 
      } 
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const links = [
    {
      label: "Email",
      value: "satriapraja.dev@gmail.com",
      href: "mailto:satriapraja.dev@gmail.com",
      icon: <FiMail />
    },
    {
      label: "LinkedIn",
      value: "satriaprajaa",
      href: "https://www.linkedin.com/in/satriaprajaa",
      icon: <FiLinkedin />
    },
    {
      label: "Github",
      value: "SatriaPraja",
      href: "https://github.com/SatriaPraja",
      icon: <FiGithub />
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#fafafa] dark:bg-[#050505] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Parent / Container */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants} // Ini adalah parent-nya
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter mb-6 leading-tight">
              {t.title} <span className="text-blue-600">{t.titleAccent}</span>
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl font-medium">
              {t.sub}
            </p>
          </motion.div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-200 dark:border-white/10 pt-12">
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants} // Anak-anaknya harus memakai variants yang sama agar stagger bekerja
                className="group flex flex-col gap-4"
              >
                <div className="flex items-center gap-3 text-blue-500 uppercase font-black text-[10px] tracking-[0.2em]">
                  {link.icon}
                  <span>{link.label}</span>
                </div>
                <div className="flex items-end justify-between border-b border-transparent group-hover:border-blue-500 transition-all pb-2">
                  <span className="text-xl lg:text-2xl font-bold tracking-tight">
                    {link.value}
                  </span>
                  <FiArrowUpRight className="text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={24} />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

       

      </div>
    </section>
  );
}