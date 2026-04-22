import { SiFlutter, SiKotlin, SiLaravel, SiFirebase, SiMysql, SiDart, SiTailwindcss } from 'react-icons/si';
import { TranslationData } from '@/lib/languages';

interface SkillsProps {
  t: TranslationData['skills'];
}

const skillsList = [
  { name: 'Flutter', icon: <SiFlutter />, color: 'text-blue-400' },
  { name: 'Dart', icon: <SiDart />, color: 'text-blue-500' },
  { name: 'Kotlin', icon: <SiKotlin />, color: 'text-purple-500' },
  { name: 'Laravel', icon: <SiLaravel />, color: 'text-red-500' },
  { name: 'SQL', icon: <SiMysql />, color: 'text-orange-400' },
  { name: 'Firebase', icon: <SiFirebase />, color: 'text-yellow-500' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-400' },
];

export default function Skills({ t }: SkillsProps) {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">
          {t.title} <span className="text-blue-500">{t.titleAccent}</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {skillsList.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-all hover:-translate-y-2 group shadow-sm">
              <div className={`text-4xl flex justify-center mb-4 ${skill.color}`}>{skill.icon}</div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}