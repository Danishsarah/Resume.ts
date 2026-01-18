import React from 'react';
import { Experience as ExperienceType } from '../types/resume.types';
import { FaBriefcase, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';

export interface ExperienceProps {
  readonly experiences: readonly ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <section className="section-container bg-gray-900">
      <h2 className="section-title">Experience</h2>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.id} className="card p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-1">
                  {exp.position}
                </h3>
                <div className="flex items-center gap-2 text-primary font-medium mb-2">
                  <FaBriefcase className="text-sm" />
                  <span>{exp.company}</span>
                </div>
              </div>

              <div className="flex flex-col gap-1 text-sm text-gray-400 mt-2 md:mt-0 md:text-right">
                <div className="flex items-center gap-2 md:justify-end">
                  <FaCalendar className="text-xs" />
                  <span>
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </span>
                </div>
                <div className="flex items-center gap-2 md:justify-end">
                  <FaMapMarkerAlt className="text-xs" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-4">{exp.description}</p>

            {exp.highlights.length > 0 && (
              <ul className="space-y-2">
                {exp.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">▹</span>
                    <span className="text-gray-400">{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
