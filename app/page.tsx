"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';
import Footer from '@/components/Footer';
import { translations, type TranslationData } from '@/lib/languages'; // Perhatikan 'type TranslationData'

export default function Home() {
  const [lang, setLang] = useState<'id' | 'en'>('id');
  const t: TranslationData = translations[lang];

  return (
    <main className="overflow-x-hidden">
      <Navbar lang={lang} setLang={setLang} />
      <Hero t={t.hero} />
      <About t={t.about} />
      <Skills t={t.skills} />
      <Projects t={t.projects} />
      <Contact t={t.contact} />
      <Footer />
    </main>
  );
}