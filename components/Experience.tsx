'use client';
import React from 'react';

export default function Experience({ lang }: { lang: 'en' | 'es' }) {
  const content = {
    en: {
      title: 'Experience',
      jobs: [
        {
          role: 'Fullstack Developer',
          company: 'Adroit Overseas',
          time: '2023 – Present',
          description: [
            'Developed scalable fullstack solutions using Java, Node.js, MongoDB, and MySQL.',
            'Built RESTful APIs and admin dashboards for client platforms.',
            'Optimized backend performance and queries.',
            'Deployed services on AWS and followed Agile methodologies.',
          ],
        },
        {
          role: 'Database Specialist & Welding QC Assistant',
          company: 'Performance Contractors (Intel Project)',
          time: '2021 – 2022',
          description: [
            'Inspected structural welding quality in high-precision environments.',
            'Collaborated with Intel engineering teams for compliance and documentation.',
            'Managed and maintained internal databases for weld traceability and reporting.',
            'Ensured data accuracy and integrity across QA systems.',
          ],
        },
      ],
    },
    es: {
      title: 'Experiencia',
      jobs: [
        {
          role: 'Desarrollador Fullstack',
          company: 'Adroit Overseas',
          time: '2023 – Actualidad',
          description: [
            'Desarrollé soluciones escalables usando Java, Node.js, MongoDB y MySQL.',
            'Construí APIs RESTful y paneles administrativos para plataformas de clientes.',
            'Optimizé rendimiento de backend y consultas.',
            'Desplegué servicios en AWS bajo metodologías ágiles.',
          ],
        },
        {
          role: 'Especialista en Bases de Datos y Asistente de Control de Calidad',
          company: 'Performance Contractors (Proyecto con Intel)',
          time: '2021 – 2022',
          description: [
            'Inspeccioné soldaduras estructurales en entornos de alta precisión.',
            'Coordiné documentación con ingenieros de Intel para cumplimiento normativo.',
            'Administré bases de datos internas para trazabilidad y reportes de calidad.',
            'Aseguré la integridad y precisión de datos en sistemas de QA.',
          ],
        },
      ],
    },
  };

  return (
    <section id="experience" className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">{content[lang].title}</h2>
      {content[lang].jobs.map((job, i) => (
        <div key={i} className="mb-10">
          <h3 className="text-xl font-semibold mb-1 text-left">
            {job.role}{' '}
            <span className="text-blue-600">– {job.company}</span>
          </h3>
          <p className="text-sm text-gray-500 mb-3 text-left">{job.time}</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-left">
            {job.description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
