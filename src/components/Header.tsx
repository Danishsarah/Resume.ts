import React from 'react';
import { PersonalInfo } from '../types/resume.types';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaGlobe,
} from 'react-icons/fa';

export interface HeaderProps {
  readonly personalInfo: PersonalInfo;
}

const Header: React.FC<HeaderProps> = ({ personalInfo }) => {
  return (
    <header className="bg-gradient-to-br from-darker via-dark to-gray-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-shrink-0">
            <img
              src="/profile.jpeg"
              alt={personalInfo.name}
              className="w-48 h-48 rounded-2xl object-cover border-4 border-primary/30 shadow-2xl shadow-primary/20"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-3 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>
            <p className="text-xl md:text-2xl font-light mb-6 text-gray-300 font-mono">
              <span className="text-primary">&lt;</span>
              {personalInfo.title}
              <span className="text-primary">/&gt;</span>
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-primary transition-colors"
              >
                <FaEnvelope className="text-primary" />
                <span>{personalInfo.email}</span>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-primary transition-colors"
              >
                <FaPhone className="text-primary" />
                <span>{personalInfo.phone}</span>
              </a>

              <div className="flex items-center gap-2 text-sm text-gray-300">
                <FaMapMarkerAlt className="text-primary" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {personalInfo.linkedin && (
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-primary rounded-lg flex items-center gap-2 transition-all"
                >
                  <FaLinkedin className="text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              )}

              {personalInfo.github && (
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-primary rounded-lg flex items-center gap-2 transition-all"
                >
                  <FaGithub className="text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm">GitHub</span>
                </a>
              )}

              {personalInfo.website && (
                <a
                  href={personalInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 hover:border-primary rounded-lg flex items-center gap-2 transition-all"
                >
                  <FaGlobe className="text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm">Website</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
