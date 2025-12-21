const WhyOurTeam = () => {
  return (
    <section id="why-our-team" className="relative">
      <div className="pill w-fit mx-auto mb-4">Почему наша команда</div>
      <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-10">Практики для практиков</h3>
      <div className="grid md:grid-cols-3 gap-8 items-stretch">
        <div className="glass-stroke rounded-2xl p-6 lg:p-8 shadow-lg shadow-teal-500/10 text-center h-full">
          <h4 className="text-xl font-semibold mb-3 text-white">Глубокая экспертиза в AI</h4>
          <p className="text-gray-300 leading-relaxed">
            Мы не просто используем AI, а разрабатываем специализированные интеллектуальные системы, которые действительно помогают решать сложные IT-задачи.
          </p>
        </div>
        <div className="glass-stroke rounded-2xl p-6 lg:p-8 shadow-lg shadow-emerald-500/10 text-center h-full">
          <h4 className="text-xl font-semibold mb-3 text-white">Практический опыт IT-проектов</h4>
          <p className="text-gray-300 leading-relaxed">
            Наша команда состоит из опытных разработчиков и менеджеров проектов, которые на собственном опыте знают, "с чего начать" и как довести проект до конца.
          </p>
        </div>
        <div className="glass-stroke rounded-2xl p-6 lg:p-8 shadow-lg shadow-green-500/10 text-center h-full">
          <h4 className="text-xl font-semibold mb-3 text-white">Интуитивный UX и наглядность</h4>
          <p className="text-gray-300 leading-relaxed">
            Мы верим, что сложные вещи должны быть простыми. Наш фокус — на максимально понятном и визуально приятном пользовательском опыте, особенно для roadmap.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyOurTeam;
