const Problem = () => {
  return (
    <section id="problem" className="relative">
      <div className="pill w-fit mx-auto mb-4">Проблема традиционного обучения</div>
      <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-10">Отставание теории от практики</h3>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="glass-stroke rounded-2xl p-6 lg:p-8 shadow-lg shadow-teal-500/10">
          <h4 className="text-xl font-semibold mb-3 text-white">Вызовы для новичков</h4>
          <p className="text-gray-300 leading-relaxed mb-4">
            Курсы дают абстрактную теорию, которая далека от реальных задач в разработке, DevOps или кибербезопасности.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Итог: страх перед реальными задачами, нет портфолио и сложности с поиском работы.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 mt-6">
            {[
              { title: "80%", text: "компаний ищут специалистов с реальным опытом" },
              { title: "4 из 5", text: "новичков испытывают «синдром самозванца»" },
            ].map(item => (
              <div key={item.title} className="glass-stroke rounded-xl p-3">
                <p className="text-2xl font-bold text-teal-200">{item.title}</p>
                <p className="text-sm text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-6 lg:p-8 shadow-xl shadow-emerald-500/10">
          <h4 className="font-bold text-xl mb-4 text-white">Главные барьеры</h4>
          <ul className="space-y-4 text-gray-300">
            {[
              "Недостаток реальной практики",
              "Нет интерактивной обратной связи",
              "Сложно перейти от теории к проекту",
              "Нет менторской поддержки",
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
