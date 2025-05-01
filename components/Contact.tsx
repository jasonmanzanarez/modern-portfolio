'use client';
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

export default function Contact({ lang }: { lang: 'en' | 'es' }) {
  const content = {
    en: {
      title: 'Get in Touch',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      button: 'Send Message',
    },
    es: {
      title: 'Contáctame',
      name: 'Nombre',
      email: 'Correo',
      message: 'Mensaje',
      button: 'Enviar mensaje',
    },
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">{content[lang].title}</h2>

      <form
        action="https://formsubmit.co/jasonsamuelmanzanarez@gmail.com"
        method="POST"
        className="space-y-6"
      >
        <input type="hidden" name="_captcha" value="false" />

        <div>
          <label className="block mb-1 font-medium">{content[lang].name}</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-600"
            placeholder={content[lang].name}
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">{content[lang].email}</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-600"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">{content[lang].message}</label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 dark:border-gray-600"
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          {content[lang].button}
        </button>
      </form>

      {/* Social Icons + Phone Hover Menu */}
      <div className="mt-10 flex justify-center gap-6 text-2xl relative">
        <a
          href="mailto:jasonsamuelmanzanarez@gmail.com"
          target="_blank"
          className="hover:text-blue-600"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/jasonmanzanarez"
          target="_blank"
          className="hover:text-gray-800"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/jason-manzanarez-cota-262ba7209"
          target="_blank"
          className="hover:text-blue-700"
        >
          <FaLinkedin />
        </a>

        {/* Phone with hover-based dropdown */}
        <div className="relative group cursor-pointer">
          <FaPhoneAlt className="hover:text-green-600" />
          <div
            className="absolute top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200
                       bg-white dark:bg-gray-800 border dark:border-gray-600 text-sm rounded-md shadow-lg p-2 space-y-1 z-50 w-max text-center select-text"
          >
            <span className="block text-gray-800 dark:text-white">
              📞 México:{' '}
              <a href="tel:+526683979197" className="hover:underline">
                +52 668 397 9197
              </a>
            </span>
            <span className="block text-gray-800 dark:text-white">
              📞 USA:{' '}
              <a href="tel:+14808691059" className="hover:underline">
                +1 480 869 1059
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
