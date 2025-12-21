import ElectricBorder from './ElectricBorder';
import farruxAvatar from '../assets/images/farrux.jpg';
import billyAvatar from '../assets/images/billy.jpg';

const teamMembers = [
  {
    name: "Маткаримов Амир Махмудович",
    role: "Бэкенд-разработчик",
    skills: ["Архитектура", "Бизнес-логика", "Базы данных", "API", "Безопасность", "Масштабируемость"],
    avatarUrl: `https://api.dicebear.com/8.x/bottts/svg?seed=АмирМахмудович`
  },
  {
    name: "Нормирзаев Билолиддин Анвар угли",
    role: "Фронтенд-разработчик",
    skills: ["Верстка", "Логика интерфейсов", "Адаптивность", "Взаимодействие с Backend", "Производительность"],
    avatarUrl: billyAvatar
  },
  {
    name: "Мирмахмудов Фаррух Боходир угли",
    role: "UI/UX + Фронтенд-разработчик",
    skills: ["Проектирование UX/UI", "Визуальные интерфейсы", "Дизайн-система", "Чистота кода"],
    avatarUrl: farruxAvatar
  },
];

// Reusable card component for a single team member
const TeamMemberCard = ({ name, role, skills, avatarUrl }: typeof teamMembers[0]) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center h-full">
    <img src={avatarUrl} alt={`Аватар ${name}`} className="w-24 h-24 rounded-full mx-auto mb-4 bg-gray-700 border-2 border-gray-600 object-cover" />
    <h4 className="font-bold text-xl text-white">{name}</h4>
    <p className="text-teal-400 mb-4">{role}</p>
    <div className="flex flex-wrap justify-center gap-2">
      {skills.map(skill => (
        <span key={skill} className="bg-gray-700 text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Team = () => {
  return (
    <section id="team">
      <div className="pill w-fit mx-auto mb-4">Команда</div>
      <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-3">Наша команда</h3>
      <p className="text-center text-gray-400 mb-10">Энтузиасты с нужными компетенциями для реализации этой идеи.</p>
      <div className="grid md:grid-cols-3 gap-8">
        {teamMembers.map(member => (
          <TeamMemberCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  );
};

export default Team;