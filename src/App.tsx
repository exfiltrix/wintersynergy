import AnimatedSection from "./components/AnimatedSection";
import ProblemSolution from "./components/ProblemSolution";
import Team from "./components/Team";
import TechImplementation from "./components/TechImplementation";
import ElectricBorder from "./components/ElectricBorder";
import WhyOurTeam from "./components/WhyOurTeam";
import Roadmap from "./components/Roadmap";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans relative overflow-hidden">

      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-white/5 bg-slate-900/70 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-500 via-emerald-500 to-green-400 shadow-lg shadow-teal-500/30 flex items-center justify-center font-bold text-lg">
                          AI
                        </div>
                        <div>
                          <p className="text-sm uppercase tracking-[0.25em] text-teal-200/80">AI-Ментор</p>
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
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">Начать проект</a>
                      </div>
                    </div>
                  </header>
            
                  <main className="container mx-auto px-6 pb-16 flex flex-col gap-20 relative z-[1]">
                    {/* Hero Section */}
                    <section className="flex flex-col gap-6 items-center text-center py-12 md:py-20">
                      <div className="space-y-6 text-center">
                        <div className="pill w-fit shine mx-auto">AI-Ментор для IT-проектов</div>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight drop-shadow-sm">
                          Ваш IT-проект от идеи до портфолио
                      </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                          AI-ассистент, который генерирует дорожную карту, помогает в процессе разработки и готовит кейс для вашего портфолио.
                        </p>
            
                        <div className="flex flex-wrap gap-3 justify-center">
                          <a href="#problem" className="btn-primary">Как это работает</a>
                        </div>
                      </div>
                    </section>
            
                    <AnimatedSection className="grid md:grid-cols-3 gap-6">
                      {[
                        {
                          title: "«Умный» Roadmap",
                          desc: "AI анализирует идею и создает пошаговый план реализации с технологиями.",
                        },
                        {
                          title: "Ментор в коде",
                          desc: "Объяснение сложных концепций прямо в контексте вашей текущей задачи.",
                        },
                        {
                          title: "Готовое портфолио",
                          desc: "После завершения проекта AI помогает упаковать его в кейс для демонстрации.",
                        },
                      ].map(card => (
                        <div key={card.title} className="glass-stroke rounded-2xl p-5 flex flex-col gap-3 shadow-lg shadow-teal-500/5">
                          <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                          <p className="text-gray-300 text-sm leading-relaxed">{card.desc}</p>
                        </div>
                      ))}
                    </AnimatedSection>
                    
                    <AnimatedSection>
                      <ProblemSolution />
                    </AnimatedSection>
            
                    <AnimatedSection>
                      <TechImplementation />
                    </AnimatedSection>
            
                    <AnimatedSection>
                      <Roadmap />
                    </AnimatedSection>
            
                    <AnimatedSection>
                      <WhyOurTeam />
                    </AnimatedSection>
                    
                    <AnimatedSection>
                      <Team />
                    </AnimatedSection>
                  </main>
            
                  {/* Footer */}
                  <footer className="py-8 mt-6 border-t border-gray-800 text-center text-gray-500 relative z-[1]">
                    <p>&copy; 2025 Winter Synergy Hackathon. Проект "AI-Mentor".</p>
                  </footer>
                </div>
              );
            }
export default App;
