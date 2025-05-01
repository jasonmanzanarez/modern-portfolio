'use client';
import React from 'react';

export default function About({ lang }: { lang: 'en' | 'es' }) {
  const content = {
    en: {
      title: 'About Me',
      text: `
I’m a Fullstack Software Developer with experience building scalable web applications and cloud-native systems.
I specialize in backend optimization, API integration, and database management using Java, Node.js, Python, and SQL-based technologies.
I've successfully implemented solutions with frameworks like Spring Boot, Django, and React.

I’ve led performance improvements and CI/CD automation in both startup and enterprise environments, and collaborated using Agile methodologies.
I hold a Bachelor's in Software Engineering and another in English Teaching, which has strengthened my communication and documentation skills in both Spanish and English.
I'm passionate about continuous learning, system reliability, and user-centered design.
      `,
    },
    es: {
      title: 'Sobre mí',
      text: `
Soy un Desarrollador Fullstack con experiencia en el desarrollo de aplicaciones web escalables y soluciones nativas en la nube.
Me especializo en la optimización del backend, integración de APIs y administración de bases de datos utilizando tecnologías como Java, Node.js, Python y sistemas basados en SQL.
He implementado soluciones exitosas con frameworks como Spring Boot, Django y React.

He liderado mejoras de rendimiento y automatización CI/CD en entornos empresariales y startups, colaborando bajo metodologías ágiles.
Cuento con una Licenciatura en Ingeniería de Software y otra en la Enseñanza del Inglés, lo que ha fortalecido mis habilidades de comunicación y documentación bilingüe.
Me apasiona el aprendizaje continuo, la confiabilidad del sistema y el diseño centrado en el usuario.
      `,
    },
  };

  return (
    <section id="about" className="py-20 px-4 max-w-5xl mx-auto text-left">
      <h2 className="text-4xl font-bold mb-6 text-center">{content[lang].title}</h2>
      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
        {content[lang].text.trim()}
      </p>
    </section>
  );
}

