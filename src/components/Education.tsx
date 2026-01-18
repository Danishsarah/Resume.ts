import React from 'react';
import { Education as EducationType } from '../types/resume.types';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendar } from 'react-icons/fa';

export interface EducationProps {
  readonly education: readonly EducationType[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <section className="section-container bg-gray-900">
      <h2 className="section-title">Education</h2>

      <div className="space-y-6">
        {education.map((edu) => (
          <div key={edu.id} className="card p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-1">
                  {edu.degree}
                </h3>
                <div className="flex items-center gap-2 text-primary font-medium mb-2">
                  <FaGraduationCap className="text-sm" />
                  <span>{edu.institution}</span>
                </div>
                <p className="text-gray-300 mb-2">Major: {edu.field}</p>
                {edu.gpa && (
                  <p className="text-gray-300 font-medium">GPA: {edu.gpa}</p>
                )}
                {edu.honors && edu.honors.length > 0 && (
                  <ul className="mt-3 space-y-1">
                    {edu.honors.map((honor, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-primary">▹</span>
                        <span className="text-gray-400">{honor}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="flex flex-col gap-1 text-sm text-gray-400 mt-2 md:mt-0 md:text-right">
                <div className="flex items-center gap-2 md:justify-end">
                  <FaCalendar className="text-xs" />
                  <span>
                    {edu.startDate} - {edu.endDate}
                  </span>
                </div>
                <div className="flex items-center gap-2 md:justify-end">
                  <FaMapMarkerAlt className="text-xs" />
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
