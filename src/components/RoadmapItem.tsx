import { useInView } from 'react-intersection-observer';

type RoadmapItemProps = {
  item: {
    quarter: string;
    title: string;
    description: string;
    status: string;
  };
  index: number;
};

const RoadmapItem = ({ item, index }: RoadmapItemProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const getStatusClasses = (status: string) => {
    switch (status) {
      case "completed":
        return {
          bg: "bg-emerald-500/10 text-emerald-400",
          text: "Выполнено",
        };
      case "in_progress":
        return {
          bg: "bg-blue-500/10 text-blue-400",
          text: "В процессе",
        };
      default:
        return {
          bg: "bg-gray-500/10 text-gray-400",
          text: "Запланировано",
        };
    }
  };

  const statusClasses = getStatusClasses(item.status);
  const isEven = index % 2 === 0;

  const content = (
    <>
      <div className="flex items-center gap-3">
        <p className="text-blue-300 font-semibold">{item.quarter}</p>
        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusClasses.bg}`}>
          {statusClasses.text}
        </span>
      </div>
      <h4 className="text-xl font-bold mt-1">{item.title}</h4>
      <p className="text-gray-400 mt-2">{item.description}</p>
    </>
  );

  return (
    <div ref={ref} className="grid grid-cols-[1fr,auto,1fr] items-start gap-6">
      {isEven ? (
        <div className={`text-right pr-12 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          {content}
        </div>
      ) : (
        <div></div>
      )}

      <div className="relative">
        <div className={`w-5 h-5 rounded-full ring-4 ring-gray-900 absolute left-1/2 -translate-x-1/2 z-10 transition-transform duration-500 ${inView ? 'scale-100' : 'scale-0'} ${item.status === 'completed' ? 'bg-emerald-500' : item.status === 'in_progress' ? 'bg-blue-500' : 'bg-gray-500'}`} />
      </div>

      {!isEven ? (
        <div className={`text-left pl-12 transition-all duration-700 ease-out ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          {content}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default RoadmapItem;