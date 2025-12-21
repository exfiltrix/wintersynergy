const Problem = () => {
  return (
    <section id="problem" className="relative">
      <div className="pill w-fit mx-auto mb-4">Проблема начинающих IT-специалистов</div>
      <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-10">"С чего начать?" — Главный барьер для роста</h3>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="glass-stroke rounded-2xl p-6 lg:p-8 shadow-lg shadow-teal-500/10">
          <h4 className="text-xl font-semibold mb-3 text-white">Страх перед новым проектом</h4>
          <p className="text-gray-300 leading-relaxed mb-4">
            Многие IT-специалисты, особенно новички, сталкиваются с неуверенностью и отсутствием четкого плана при начале работы над проектом.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Отсутствие структуры, незнание подходящих технологий и неумение управлять временем приводят к прокрастинации и откладыванию важных задач.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mt-6">
            {[
              { title: "70%", text: "специалистов испытывают стресс при старте нового проекта" },
              { title: "60%", text: "проектов не доходят до MVP из-за проблем с планированием" },
            ].map(item => (
              <div key={item.title} className="glass-stroke rounded-xl p-3">
                <p className="text-2xl font-bold text-teal-200">{item.title}</p>
                <p className="text-sm text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-6 lg:p-8 shadow-xl shadow-emerald-500/10">
          <h4 className="font-bold text-xl mb-4 text-white">Ключевые препятствия на пути к успешному проекту</h4>
          <ul className="space-y-4 text-gray-300">
            {[
              "Отсутствие четкого пошагового плана",
              "Сложность выбора правильных технологий",
              "Непонимание очередности задач и приоритетов",
              "Отсутствие персонализированной менторской поддержки",
              "Трудности в презентации готового проекта (портфолио)"
            ].map(factor => (
              <li key={factor} className="flex items-start gap-3">
                <span className="w-2 h-2 mt-2 rounded-full bg-emerald-400" />
                <span>{factor}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Problem;
