import React from "react";
import { Skill, SkillCategory } from "../types/resume.types";

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const categories: SkillCategory[] = [
    "Programming Languages",
    "Frameworks & Libraries",
    "Tools & Technologies",
    "Soft Skills"
  ];

  const getSkillsByCategory = (category: SkillCategory) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section className="section-container bg-gray-900">
      <h2 className="section-title">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map(category => {
          const categorySkills = getSkillsByCategory(category);
          if (categorySkills.length === 0) return null;

          return (
            <div key={category} className="card p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-primary">
                  {"<"}
                </span>
                {category}
                <span className="text-primary">
                  {"/>"}
                </span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map(skill =>
                  <span
                    key={skill.id}
                    className="px-3 py-1.5 bg-gray-700/50 border border-gray-600 text-gray-200 text-sm rounded-lg hover:border-primary hover:bg-gray-700 transition-all font-mono"
                  >
                    {skill.name}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
