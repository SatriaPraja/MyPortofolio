import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="flex gap-6 mb-6">
          <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><FiGithub size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><FiLinkedin size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors"><FiInstagram size={24} /></a>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} SatriaPraja. All rights reserved.
        </p>
      </div>
    </footer>
  );
}