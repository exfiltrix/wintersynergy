import { useInView } from 'react-intersection-observer';
import RoadmapItem from './RoadmapItem';

const Roadmap = () => {
  const roadMapItems = [
    {
      quarter: "Q1 2026",
      title: "Закрытое бета-тестирование",
      description: "Запуск MVP и сбор обратной связи для отладки основного функционала.",
      status: "in_progress",
    },
    {
      quarter: "Q2 2026",
      title: "Плагин для VS Code",
      description: "Разработка расширения для получения подсказок AI-ментора в редакторе кода.",
      status: "in_progress",
    },
    {
      quarter: "Q3 2026",
      title: "Интеграция с GitHub",
      description: "Связывание проектов с репозиториями для автоматического отслеживания прогресса.",
      status: "planned",
    },
    {
      quarter: "Q4 2026",
      title: "Публичный запуск",
      description: "Официальный релиз, функция упаковки проектов в портфолио и расширение базы знаний.",
      status: "planned",
    },
  ];
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="roadmap" ref={ref}>
      <div className="pill w-fit mx-auto mb-4">Дорожная карта</div>
      <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-10">План развития проекта</h3>
      <div className="relative">
        {/* The timeline line */}
        <div 
          className={`absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-teal-500 to-transparent transition-transform duration-1000 ease-out origin-top ${inView ? 'scale-y-100' : 'scale-y-0'}`} 
        />
         <div 
          className={`absolute left-1/2 -translate-x-1/2 h-full w-2 blur-lg bg-gradient-to-b from-transparent via-emerald-500 to-transparent transition-transform duration-1000 ease-out origin-top delay-300 ${inView ? 'scale-y-100' : 'scale-y-0'}`} 
        />

        <div className="space-y-12">
          {roadMapItems.map((item, index) => (
            <RoadmapItem key={item.quarter} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;