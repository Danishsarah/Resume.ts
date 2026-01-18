# Resume Website

A modern, clean, and fully typed resume website built with React, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern and clean design
- 📱 Fully responsive layout
- 🎨 Built with Tailwind CSS
- 💪 Fully typed with TypeScript
- ⚡ Fast development with Vite
- 🧩 Component-based architecture
- 📦 Easy to customize

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The website will open automatically at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Your Information

Edit the data in `src/data/resumeData.ts` to add your personal information:

- Personal info (name, title, contact details)
- Work experience
- Education
- Skills
- Projects

### Modify Styling

- Global styles: `src/index.css`
- Tailwind configuration: `tailwind.config.js`
- Individual components: Each component file in `src/components/`

### TypeScript Types

All types are defined in `src/types/resume.types.ts`. Modify these to match your needs.

## Project Structure

```
resume-website/
├── src/
│   ├── components/        # React components
│   │   ├── Header.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   └── Footer.tsx
│   ├── data/             # Resume data
│   │   └── resumeData.ts
│   ├── types/            # TypeScript types
│   │   └── resume.types.ts
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

## License

MIT
# Resume.ts
