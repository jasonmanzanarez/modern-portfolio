'use client';
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiReact,
  SiGit,
  SiDjango,
  SiFlutter,
  SiDocker,
} from 'react-icons/si';
import { FaJava, FaAws, FaChartBar } from 'react-icons/fa'; // Power BI (visual substitute)

type Skill = {
  name: string;
  icon: React.ReactNode;
  baseColor: string;
};

const skills: Skill[] = [
  { name: 'JavaScript', icon: <SiJavascript />, baseColor: 'text-yellow-400' },
  { name: 'TypeScript', icon: <SiTypescript />, baseColor: 'text-blue-500' },
  { name: 'HTML', icon: <SiHtml5 />, baseColor: 'text-orange-600' },
  { name: 'CSS', icon: <SiCss3 />, baseColor: 'text-blue-400' },
  { name: 'Java', icon: <FaJava />, baseColor: 'text-red-600' },
  { name: 'Node.js', icon: <SiNodedotjs />, baseColor: 'text-green-500' },
  { name: 'Python', icon: <SiPython />, baseColor: 'text-blue-600' },
  { name: 'MongoDB', icon: <SiMongodb />, baseColor: 'text-green-600' },
  { name: 'MySQL', icon: <SiMysql />, baseColor: 'text-sky-700' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, baseColor: 'text-indigo-600' },
  { name: 'AWS', icon: <FaAws />, baseColor: 'text-orange-500' },
  { name: 'Docker', icon: <SiDocker />, baseColor: 'text-blue-500' },
  { name: 'React', icon: <SiReact />, baseColor: 'text-cyan-400' },
  { name: 'Git', icon: <SiGit />, baseColor: 'text-red-500' },
  { name: 'Django', icon: <SiDjango />, baseColor: 'text-green-900' },
  { name: 'Flutter', icon: <SiFlutter />, baseColor: 'text-blue-400' },
  { name: 'Power BI', icon: <FaChartBar />, baseColor: 'text-yellow-600' },
];

export default function Skills({ lang }: { lang: 'en' | 'es' }) {
  const title = lang === 'en' ? 'Skills' : 'Habilidades';

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 place-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700 p-4 rounded-xl shadow-sm hover:shadow-md"
          >
            <div
              className={`text-4xl transition-colors duration-300 ${skill.baseColor} group-hover:text-gray-800 dark:group-hover:text-gray-200`}
            >
              {skill.icon}
            </div>
            <span className="mt-2 text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
