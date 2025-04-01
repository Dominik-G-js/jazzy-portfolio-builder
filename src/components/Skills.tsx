
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    title: "Programování",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "HTML", level: 85 },
      { name: "CSS", level: 75 },
      { name: "PHP", level: 40 },
      { name: "Python", level: 70 },
    ],
  },
  {
    title: "Technologie",
    skills: [
      { name: "Latte", level: 45 },
      { name: "AJAX", level: 40 },
      { name: "Nette", level: 50 },
      { name: "JavaScript", level: 90 },
      { name: "HTML", level: 85 },
    ],
  },
  {
    title: "Kancelářské aplikace",
    skills: [
      { name: "Microsoft Excel", level: 85 },
      { name: "Microsoft Word", level: 85 },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Moje dovednosti</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Technologie a nástroje, se kterými pracuji a které neustále rozvíjím.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="p-6 rounded-lg bg-gray-50 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 border-b pb-2 border-gray-200">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-gray-200" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
