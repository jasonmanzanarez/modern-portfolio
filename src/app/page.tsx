'use client';

import { useState } from 'react';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Experience from '../../components/Experience';


export default function Home() {
  const [lang, setLang] = useState<'en' | 'es'>('en');

  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'es' : 'en'));

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar onLanguageChange={toggleLang} currentLang={lang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Experience lang={lang} />
      <Skills lang={lang} />
      <Projects lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
