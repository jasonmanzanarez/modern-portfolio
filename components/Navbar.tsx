'use client';

export default function Navbar({ onLanguageChange, currentLang }: { onLanguageChange: () => void; currentLang: string }) {
  return (
    <nav className="flex justify-end p-4 bg-white dark:bg-gray-900 shadow-md">
      <button
        onClick={onLanguageChange}
        className="text-sm font-medium text-gray-700 dark:text-gray-200 border px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        {currentLang === 'en' ? 'ES' : 'EN'}
      </button>
    </nav>
  );
}
