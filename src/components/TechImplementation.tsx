import type { ReactNode } from 'react';
import ElectricBorder from './ElectricBorder';

// A simple reusable card component for this section
const TechCard = ({ title, description, icon }: { title: string; description: string; icon: ReactNode }) => (
  <ElectricBorder className="rounded-lg h-full" speed={1.5} chaos={0.5}>
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-start space-x-4 h-full min-h-[150px] transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/20">
      <div className="flex-shrink-0 text-teal-400 mt-1">{icon}</div>
      <div>
        <h4 className="font-bold text-xl text-white">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  </ElectricBorder>
);

const TechImplementation = () => {
  return (
    <section id="tech-implementation">
      <div className="pill w-fit mx-auto mb-4">Техническая реализация</div>
      <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-3">Наш технологический стек</h3>
      <p className="text-center text-gray-400 mb-10">Продвинутый AI, надежная инфраструктура и интерактивный фронтенд.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* AI Stack */}
        <TechCard 
          title="Генеративные AI"
          description="Создание интеллектуальных Roadmap, динамических IT-сценариев, генерация кода и тестов в реальном времени (GPT-4, Gemini Pro)."
          icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M4 17v4M2 19h4M17 3v4M15 5h4M18 17v4M16 19h4M9 9a2 2 0 012-2h2a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2V9z"></path></svg>}
        />
        <TechCard 
          title="Контекстный AI-Наставник"
          description="Специализированная модель для помощи в отладке, архитектуре и применении лучших практик."
          icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>}
        />
        <TechCard 
          title="Изолированная песочница"
          description="Безопасное выполнение кода и развертывание в изолированных контейнерах (Docker)."
          icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .89-1.077 1.337-1.707.707L5.586 15z"></path></svg>}
        />
        
        {/* Platform Stack */}
         <TechCard 
          title="Современный фронтенд"
          description="Интерактивный интерфейс на React, TypeScript и Vite для максимальной производительности."
          icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2 1M4 7l2-1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>}
        />
         <TechCard 
          title="Быстрый бэкенд"
          description="Высокопроизводительная обработка AI-запросов и данных на FastAPI или Node.js."
          icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>}
        />
         <TechCard 
          title="Надежная инфраструктура"
          description="Автоматическое развертывание и масштабирование на облачных сервисах (CI/CD, AWS/GCP)."
          icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>}
        />

      </div>
    </section>
  );
};

export default TechImplementation;
