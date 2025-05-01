'use client';
import React from 'react';

export default function Projects({ lang }: { lang: 'en' | 'es' }) {
  const content = {
    en: {
      title: 'Projects',
      demo: 'Live Demo',
      code: 'Source Code',
      list: [
        {
          title: 'Medical Management System',
          description:
            'A secure medical system developed with Django to manage patient histories, clinical nutrition metrics (IMC, weight tracking), and role-based access. Includes authentication, custom dashboards, and is deployed on AWS EC2.',
          tech: ['Django', 'Python', 'MySQL', 'AWS EC2'],
          github: '',
        },
        {
          title: 'Intelligent Virtual Trainer',
          description:
            'A smart trainer using MediaPipe Pose and OpenCV that recognizes body posture through webcam in real time. Counts valid exercise repetitions and provides voice feedback using pyttsx3. Modular Python logic designed for expansion.',
          tech: ['Python', 'MediaPipe', 'OpenCV', 'pyttsx3'],
          github: '',
        },
        {
          title: 'BitAgro (Freelance Project)',
          description:
            'Fullstack agro-investment platform developed as a freelance project. Features dashboards for producers, login system, investment flow management and secure backend with MongoDB. Designed mobile-first using React and Tailwind.',
          tech: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
          github: 'https://github.com/jasonmanzanarez/BitAgro_Frontend-master',
          github2: 'https://github.com/jasonmanzanarez/BitAgro_Backend-master',
        },
      ],
    },
    es: {
      title: 'Proyectos',
      demo: 'Ver demo',
      code: 'Código fuente',
      list: [
        {
          title: 'Sistema de Gestión Médica',
          description:
            'Sistema médico desarrollado en Django para gestionar historiales clínicos, indicadores nutricionales (IMC, peso) y control de acceso por roles. Incluye autenticación, paneles personalizados y despliegue en AWS EC2.',
          tech: ['Django', 'Python', 'MySQL', 'AWS EC2'],
          github: '',
        },
        {
          title: 'Entrenador Virtual Inteligente',
          description:
            'Entrenador inteligente con MediaPipe Pose y OpenCV que reconoce la postura en tiempo real. Cuenta repeticiones correctas de ejercicios y da retroalimentación por voz usando pyttsx3. Lógica modular en Python lista para ampliarse.',
          tech: ['Python', 'MediaPipe', 'OpenCV', 'pyttsx3'],
          github: '',
        },
        {
          title: 'BitAgro (Proyecto Freelance)',
          description:
            'Plataforma de inversión agrícola desarrollada como proyecto freelance. Incluye dashboards para productores, login, gestión de inversiones y backend seguro con MongoDB. Diseño mobile-first con React y Tailwind.',
          tech: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
          github: 'https://github.com/jasonmanzanarez/BitAgro_Frontend-master',
          github2: 'https://github.com/jasonmanzanarez/BitAgro_Backend-master',
        },
      ],
    },
  };

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">{content[lang].title}</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {content[lang].list.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col p-6"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-2">
              {project.github ? (
                <>
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition"
                  >
                    {content[lang].code} (Frontend)
                  </a>
                  {project.github2 && (
                    <a
                      href={project.github2}
                      target="_blank"
                      className="text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition"
                    >
                      {content[lang].code} (Backend)
                    </a>
                  )}
                </>
              ) : (
                <span className="text-gray-400 italic text-sm text-center">
                  {lang === 'en' ? 'Coming soon' : 'Próximamente'}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
