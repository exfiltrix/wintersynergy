const WhyOurTeam = () => {
  return (
    <section id="why-our-team" className="relative">
      <div className="pill w-fit mx-auto mb-4">Почему наша команда</div>
      <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-10">Практики для практиков</h3>
      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        <div className="glass-stroke rounded-2xl p-6 lg:p-8 shadow-lg shadow-teal-500/10 text-center h-full">
          <h4 className="text-xl font-semibold mb-3 text-white">Экспертиза в AI</h4>
          <p className="text-gray-300 leading-relaxed">
            Мы создаем "умные" и полезные AI-инструменты, а не просто чат-ботов.
          </p>
        </div>
        <div className="glass-stroke rounded-2xl p-6 lg:p-8 shadow-lg shadow-emerald-500/10 text-center h-full">
          <h4 className="text-xl font-semibold mb-3 text-white">Опыт в разработке</h4>
          <p className="text-gray-300 leading-relaxed">
            Мы сами прошли путь от новичка до senior-разработчика и создали инструмент, решающий реальные проблемы.
          </p>
        </div>
        <div className="glass-stroke rounded-2xl p-6 lg:p-8 shadow-lg shadow-green-500/10 text-center h-full">
          <h4 className="text-xl font-semibold mb-3 text-white">Фокус на UX</h4>
          <p className="text-gray-300 leading-relaxed">
            Мы уделяем особое внимание интуитивному интерфейсу и визуализации для комфортного обучения.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyOurTeam;
