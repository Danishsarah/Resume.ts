import React from "react";
import { PersonalInfo } from "../types/resume.types";

interface AboutProps {
  summary: string;
}

const About: React.FC<AboutProps> = ({ summary }) => {
  return (
    <section className="section-container bg-gray-900">
      <h2 className="section-title">About Me</h2>
      <div className="card p-8">
        <p className="text-lg text-gray-300 leading-relaxed">
          {summary}
        </p>
      </div>
    </section>
  );
};

export default About;
