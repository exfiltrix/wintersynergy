import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-white/5 bg-slate-900/70 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400 shadow-lg shadow-indigo-500/30 flex items-center justify-center font-bold text-lg">
            AI
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-indigo-200/80">AI-Ментор</p>
            <h1 className="text-xl font-extrabold leading-tight">Кодовый Квест</h1>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-lg text-gray-300">
          <a href="#problem" className="hover:text-white transition">Проблема и Решение</a>
          <a href="#tech-implementation" className="hover:text-white transition">Реализация</a>
          <a href="#roadmap" className="hover:text-white transition">Дорожная карта</a>
          <a href="#why-our-team" className="hover:text-white transition">О нас</a>
          <a href="#team" className="hover:text-white transition">Команда</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-primary hidden md:inline-flex">Начать проект</a>
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center gap-4 text-lg text-gray-300 py-4">
            <a href="#problem" className="hover:text-white transition">Проблема и Решение</a>
            <a href="#tech-implementation" className="hover:text-white transition">Реализация</a>
            <a href="#roadmap" className="hover:text-white transition">Дорожная карта</a>
            <a href="#why-our-team" className="hover:text-white transition">О нас</a>
            <a href="#team" className="hover:text-white transition">Команда</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex mt-2">Начать проект</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
