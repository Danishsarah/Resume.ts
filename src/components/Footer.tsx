import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darker border-t border-gray-800 text-white py-8">
      <div className="section-container text-center">
        <p className="text-gray-400 font-mono text-sm">
          <span className="text-primary">{"<"}</span>
          © {currentYear} Built with React + TypeScript + Tailwind CSS
          <span className="text-primary">{"/>"}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
