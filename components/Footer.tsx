import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="py-20 border-t border-gray-200 dark:border-white/5 bg-[#fafafa] dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Branding */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="font-black text-2xl tracking-tighter text-blue-600">
            S<span className="text-gray-900 dark:text-white">.</span>
          </div>
          <p className="text-gray-500 dark:text-gray-500 text-xs font-bold uppercase tracking-[0.3em]">
            Software Developer
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-8">
          <a href="https://github.com/SatriaPraja" target="_blank" className="text-gray-400 hover:text-blue-600 transition-all transform hover:-translate-y-1">
            <FiGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/satriaprajaa" target="_blank" className="text-gray-400 hover:text-blue-600 transition-all transform hover:-translate-y-1">
            <FiLinkedin size={22} />
          </a>
          <a href="mailto:satriapraja.dev@gmail.com" className="text-gray-400 hover:text-blue-600 transition-all transform hover:-translate-y-1">
            <FiMail size={22} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 dark:text-gray-600 text-[10px] font-black uppercase tracking-widest">
          © {new Date().getFullYear()} Satria — Jawa Tengah, ID
        </p>
      </div>
    </footer>
  );
}