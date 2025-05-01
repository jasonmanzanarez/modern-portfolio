'use client';
import React from 'react';

export default function Footer({ lang }: { lang: 'en' | 'es' }) {
  const content = {
    en: `© ${new Date().getFullYear()} Jason Samuel Manzanarez Cota. All rights reserved.`,
    es: `© ${new Date().getFullYear()} Jason Samuel Manzanarez Cota. Todos los derechos reservados.`,
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-10">
      <div className="text-center text-sm text-gray-600 dark:text-gray-400">
        {content[lang]}
      </div>
    </footer>
  );
}
