const Demo = () => {
  return (
    <section id="demo">
      <div className="pill w-fit mx-auto mb-4">Демонстрация</div>
      <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-10">Как выглядит решение реальной IT-задачи</h3>

      <div className="glass-panel rounded-3xl shadow-2xl shadow-indigo-500/15 p-4 sm:p-8 mx-auto max-w-6xl">
        <p className="text-center text-gray-300 mb-8">Квест: «Оптимизация базы данных» в стартапе</p>
        
        <div className="bg-slate-900/70 rounded-2xl p-4 sm:p-6 border border-white/5 glass-stroke">
          {/* Window Header */}
          <div className="flex items-center mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-grow text-center text-xs sm:text-sm text-gray-400">
              Квест: Оптимизация БД — Стартап Проект
            </div>
            <span className="pill text-[10px]">Live</span>
          </div>

          {/* App Content */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6" style={{minHeight: '24rem'}}>
            {/* Left: Story Panel */}
            <div className="glass-stroke rounded-xl p-4 flex flex-col">
              <h4 className="font-bold mb-2 border-b border-white/5 pb-2 text-white">Задача</h4>
              <div className="text-gray-200 space-y-3 text-sm flex-grow leading-relaxed">
                <p>Твой стартап испытывает проблемы с производительностью. База данных тормозит, пользователи жалуются, инвесторы нервничают.</p>
                <p>Ты — новый DevOps-инженер, и твоя первая задача — найти узкие места и оптимизировать запросы к PostgreSQL. AI-наставник — твой опытный тимлид.</p>
                <p className="p-3 bg-blue-900/50 rounded-md border border-blue-700/60"><strong>Задание:</strong> Проанализируй логи БД, определи медленные запросы и предложи оптимальные индексы для таблицы 'users' и 'products'. Обоснуй свой выбор.</p>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
                <span>IT-симуляция</span>
                <span className="text-emerald-300">Реальные данные</span>
              </div>
            </div>

            {/* Right: Mentor Chat */}
            <div className="glass-stroke rounded-xl p-4 flex flex-col">
              <h4 className="font-bold mb-2 border-b border-white/5 pb-2 text-white flex items-center gap-2">
                Чат с Тимлидом (AI)
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden />
              </h4>
              <div className="space-y-4 text-sm flex-grow overflow-y-auto pr-2">
                {/* Mentor's message */}
                <div className="flex">
                  <div className="bg-gray-800 rounded-lg p-3 max-w-xs shadow-inner shadow-indigo-500/5">
                    <p>Привет! Вижу, ты уже погрузился в логи. Какие первые мысли?</p>
                  </div>
                </div>
                {/* User's message */}
                <div className="flex justify-end">
                  <div className="bg-blue-600 rounded-lg p-3 max-w-xs text-white shadow-lg shadow-blue-500/25">
                    <p>Кажется, запросы к таблице 'users' очень медленные, особенно когда мы фильтруем по 'last_login'.</p>
                  </div>
                </div>
                 {/* Mentor's message */}
                <div className="flex">
                  <div className="bg-gray-800 rounded-lg p-3 max-w-xs shadow-inner shadow-indigo-500/5">
                    <p>Отличный инсайт! Что скажешь насчет индексов? Какой тип индекса был бы здесь наиболее эффективен и почему?</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-gray-400">
                <div className="glass-stroke rounded-lg p-2">Подсказки по SQL</div>
                <div className="glass-stroke rounded-lg p-2">Варианты индексов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
