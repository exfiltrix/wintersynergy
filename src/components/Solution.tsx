const Solution = () => {
  return (
    <section id="solution">
      <div className="pill w-fit mx-auto mb-4 mt-8">Наше решение</div>
      <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-10">Практика + AI-Ментор</h3>

      <div className="glass-panel rounded-3xl shadow-xl shadow-teal-500/10 p-8 md:p-12">
        <div className="grid md:grid-cols-[1fr,1.1fr] gap-8 items-start">
          <div className="text-center flex flex-col items-center gap-4">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500 via-emerald-500 to-green-400 opacity-70 blur-2xl" />
              <svg className="w-32 h-32 mx-auto relative text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
            </div>
            <h4 className="text-2xl font-bold">Обучение через практику</h4>
            <p className="text-gray-400">Кодинг + Менторство = Рост</p>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-200 leading-relaxed">
              Мы совмещаем симуляции реальных IT-задач с AI-наставником. Это — активное погружение в разработку с немедленной обратной связью и безопасными экспериментами.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Реальные IT-симуляции",
                  text: "Решайте задачи по развертыванию, отладке и безопасности в изолированной песочнице.",
                },
                {
                  title: "Контекстный AI-наставник",
                  text: "Получайте помощь по синтаксису, архитектуре и лучшим практикам, как от опытного тимлида.",
                },
                {
                  title: "Адаптивный подход",
                  text: "Сложность, темп и подсказки адаптируются под ваш текущий уровень и прогресс.",
                },
                {
                  title: "Трекинг прогресса",
                  text: "Отслеживаем метрики для ускорения вашего профессионального развития.",
                },
              ].map(block => (
                <div key={block.title} className="glass-stroke rounded-xl p-4 shadow-lg shadow-teal-500/5">
                  <h5 className="font-semibold text-white">{block.title}</h5>
                  <p className="text-gray-400 text-sm leading-relaxed mt-1">{block.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
