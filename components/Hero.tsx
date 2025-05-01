'use client';
import React from 'react';

export default function Hero({ lang }: { lang: 'en' | 'es' }) {
  const content = {
    en: {
      title: "Hi, I'm Jason Samuel Manzanarez Cota",
      subtitle: 'Fullstack Developer specialized in scalable web apps, APIs, and cloud-native solutions.',
      button: 'Download Resume',
    },
    es: {
      title: 'Hola, soy Jason Samuel Manzanarez Cota',
      subtitle: 'Desarrollador Fullstack especializado en apps web escalables, APIs y soluciones cloud-native.',
      button: 'Descargar CV',
    },
  };

  return (
    <section className="py-20 flex flex-col justify-center items-center text-center px-4">
      <img
        src="/profile.jpg"
        alt="Jason Samuel Manzanarez Cota"
        className="w-47 h-57 rounded-xl object-top border-4 border-blue-600 mb-6"
      />
      <h1 className="text-5xl font-bold mb-4">{content[lang].title}</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-xl">
        {content[lang].subtitle}
      </p>
      <a
        href={lang === 'es' ? '/Jason_Manzanarez_CV_ES.pdf' : '/Jason_Manzanarez_CV_EN.pdf'}
        download
        className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        {content[lang].button}
      </a>
    </section>
  );
}
