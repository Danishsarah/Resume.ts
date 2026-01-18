import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { resumeData } from './data/resumeData';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header personalInfo={resumeData.personalInfo} />
      <About summary={resumeData.personalInfo.summary} />
      <Experience experiences={resumeData.experience} />
      <Education education={resumeData.education} />
      <Skills skills={resumeData.skills} />
      <Projects projects={resumeData.projects} />
      <Footer />
    </div>
  );
};

export default App;
