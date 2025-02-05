import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiTypescript,
  SiAngular,
  SiTailwindcss,
  SiNestjs,
  SiPostgresql,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

export function TechIcons() {
  const icons = [
    { icon: <FaHtml5 className="text-4xl text-orange-500" />, label: 'HTML' },
    { icon: <FaCss3Alt className="text-4xl text-blue-500" />, label: 'CSS' },
    {
      icon: <FaJs className="text-4xl text-yellow-500" />,
      label: 'JavaScript',
    },
    {
      icon: <SiTypescript className="text-4xl text-blue-600" />,
      label: 'TypeScript',
    },
    { icon: <FaReact className="text-4xl text-cyan-500" />, label: 'React' },
    {
      icon: <TbBrandReactNative className="text-4xl text-blue-500" />,
      label: 'React Native',
    },
    { icon: <SiAngular className="text-4xl text-red-600" />, label: 'Angular' },
    {
      icon: <SiTailwindcss className="text-4xl text-teal-500" />,
      label: 'TailwindCSS',
    },
    {
      icon: <FaNodeJs className="text-4xl text-green-500" />,
      label: 'Node.js',
    },
    { icon: <SiNestjs className="text-4xl text-red-500" />, label: 'NestJS' },
    {
      icon: <SiPostgresql className="text-4xl text-blue-800" />,
      label: 'PostgreSQL',
    },
  ];

  return (
    <div className="mt-6 grid grid-cols-2 justify-center gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {icons.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center space-y-2 rounded-lg border-transparent p-4 transition-all duration-300 hover:scale-105 hover:border-2 hover:border-rose-600 hover:shadow-lg"
        >
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
