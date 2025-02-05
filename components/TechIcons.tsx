import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiTypescript,
  SiAngular,
  SiTailwindcss,
  SiNestjs,
  SiPostgresql,
  SiDocker,
  SiSass,
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

const ICONS = [
  { Component: FaJs, color: 'text-yellow-500', label: 'JavaScript' },
  { Component: SiTypescript, color: 'text-blue-600', label: 'TypeScript' },
  { Component: FaReact, color: 'text-cyan-500', label: 'React' },
  {
    Component: TbBrandReactNative,
    color: 'text-blue-500',
    label: 'React Native',
  },
  { Component: SiAngular, color: 'text-red-600', label: 'Angular' },
  { Component: SiTailwindcss, color: 'text-teal-500', label: 'TailwindCSS' },
  { Component: FaNodeJs, color: 'text-green-500', label: 'Node.js' },
  { Component: SiNestjs, color: 'text-red-500', label: 'NestJS' },
  { Component: SiPostgresql, color: 'text-blue-800', label: 'PostgreSQL' },
  { Component: SiDocker, color: 'text-blue-500', label: 'Docker' },
  { Component: SiSass, color: 'text-pink-500', label: 'Sass' },
];

export function TechIcons() {
  return (
    <div className="mt-6 grid grid-cols-2 justify-center gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {ICONS.map(({ Component, color, label }, index) => (
        <div
          key={index}
          className="flex flex-col items-center space-y-2 rounded-lg border-transparent p-4 transition-all duration-300 hover:scale-105 hover:border-2 hover:border-rose-600 hover:shadow-lg"
        >
          <Component className={`text-4xl ${color}`} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
