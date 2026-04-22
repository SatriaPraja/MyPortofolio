"use client";
import { motion } from 'framer-motion';
import { 
  SiFlutter, SiKotlin, SiLaravel, SiFirebase, 
  SiMysql, SiDart, SiTailwindcss, SiNextdotjs, 
  SiFigma, SiReact, SiNodedotjs, SiMongodb 
} from 'react-icons/si';
import { TranslationData } from '@/lib/languages';

interface SkillsProps {
  t: TranslationData['skills'];
}

export default function Skills({ t }: SkillsProps) {
  const skillCategories = [
    {
      title: "Mobile Stack",
      skills: [
        { name: 'Flutter', icon: <SiFlutter />, color: 'text-[#61DAFB]' },
        { name: 'Dart', icon: <SiDart />, color: 'text-[#0175C2]' },
        { name: 'Kotlin', icon: <SiKotlin />, color: 'text-[#7F52FF]' },
        { name: 'React Native', icon: <SiReact />, color: 'text-[#61DAFB]' },
      ]
    },
    {
      title: "Web & Backend",
      skills: [
        { name: 'Laravel', icon: <SiLaravel />, color: 'text-[#FF2D20]' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-black dark:text-white' },
        { name: 'NodeJS', icon: <SiNodedotjs />, color: 'text-[#339933]' },
        { name: 'Tailwind', icon: <SiTailwindcss />, color: 'text-[#06B6D4]' },
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: 'MySQL', icon: <SiMysql />, color: 'text-[#4479A1]' },
        { name: 'Firebase', icon: <SiFirebase />, color: 'text-[#FFCA28]' },
        { name: 'MongoDB', icon: <SiMongodb />, color: 'text-[#47A248]' },
        { name: 'Figma', icon: <SiFigma />, color: 'text-[#F24E1E]' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="skills" className="relative py-20 bg-white dark:bg-[#0a0a0c] transition-colors duration-500 overflow-hidden">
      
      {/* Background Decor - Senada dengan About */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Header - Simetris dengan About */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md"
          >
            <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.2em]">Expertise</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white"
          >
            {t.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">{t.titleAccent}</span>
          </motion.h2>
        </div>

        {/* Categories Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="space-y-6">
              {/* Category Title */}
              <div className="flex items-center gap-4">
                <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400 whitespace-nowrap">
                  {category.title}
                </h3>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-gray-100 dark:from-white/10 to-transparent" />
              </div>

              {/* Grid yang solid dan "Lega" */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative p-6 rounded-[2.5rem] bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden text-center"
                  >
                    {/* Hover Background Accent */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-transparent transition-all duration-500" />
                    
                    <div className="relative z-10 flex flex-col items-center gap-3">
                      <div className={`text-4xl md:text-5xl drop-shadow-sm transition-transform duration-300 group-hover:scale-110 ${skill.color}`}>
                        {skill.icon}
                      </div>
                      <p className="text-sm font-black text-gray-700 dark:text-gray-300 tracking-tight">
                        {skill.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Floating Bottom Element */}
        <div className="mt-20 flex justify-center">
           <div className="h-1 w-20 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full opacity-30" />
        </div>
      </div>
    </section>
  );
}