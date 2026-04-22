"use client";
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { Sun, Moon, Languages } from 'lucide-react';
import { useTheme } from 'next-themes';

interface NavbarProps {
  lang: 'id' | 'en';
  setLang: Dispatch<SetStateAction<'id' | 'en'>>;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // Pastikan komponen sudah termuat di client sebelum merender ikon tema
  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === 'system' ? resolvedTheme : theme;

  const navLinks = lang === 'id' 
    ? [
        { name: 'Home', href: '#home' },
        { name: 'Tentang', href: '#about' },
        { name: 'Skill', href: '#skills' },
        { name: 'Proyek', href: '#projects' },
        { name: 'Kontak', href: '#contact' },
      ]
    : [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
      ];

  return (
    <nav className="fixed w-full z-50 top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-blue-500 text-xl tracking-tighter">S.</div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-6 mr-4 border-r border-gray-200 dark:border-gray-700 pr-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <button 
              onClick={() => setLang(lang === 'id' ? 'en' : 'id')}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all flex items-center gap-1.5 text-xs font-bold"
            >
              <Languages size={16} />
              {lang.toUpperCase()}
            </button>

            {/* Dark Mode Toggle Desktop */}
            <button 
              onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-yellow-500 dark:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              aria-label="Toggle Dark Mode"
            >
              {mounted && (currentTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />)}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              className="p-2 text-yellow-500 dark:text-blue-400"
            >
              {mounted && (currentTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-300">
              {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }} 
          animate={{ opacity: 1, height: 'auto' }} 
          className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 pt-2 pb-6 space-y-1"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-500 block px-3 py-3 rounded-md text-base font-medium transition-all"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => { setLang(lang === 'id' ? 'en' : 'id'); setIsOpen(false); }}
            className="w-full text-left px-3 py-3 text-sm font-bold text-blue-500 flex items-center gap-2"
          >
            <Languages size={18} /> Ganti Bahasa ({lang === 'id' ? 'English' : 'Indonesia'})
          </button>
        </motion.div>
      )}
    </nav>
  );
}