# CV

This repository contains a personal resume website built with React, TypeScript, Tailwind CSS, and Vite.

The project currently lives under the `resume/` directory and provides a simple one-page resume site with sections for personal introduction, professional experience, and contact information.

## Current Status

The site is currently a working resume-site scaffold. It includes:

- A Vite-powered React application
- TypeScript configuration
- Tailwind CSS setup
- ESLint configuration
- A single-page resume layout
- Basic build and preview scripts

Some content is still placeholder-based, including the displayed name, email address, and GitHub profile link. These should be replaced with the actual resume information before publishing.

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite
- ESLint

## Project Structure

```text
.
├── README.md
└── resume/
    ├── README.md
    ├── package.json
    ├── index.html
    ├── src/
    │   ├── App.tsx
    │   ├── main.tsx
    │   └── index.css
    └── vite.config.ts
```

## Development

Go to the resume project directory:

```bash
cd resume
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Lint

Run ESLint:

```bash
npm run lint
```

## Deployment

The site can be deployed as a static frontend application, for example with GitHub Pages or another static hosting platform.

Before deployment, update the placeholder resume content in `resume/src/App.tsx`.

## Next Steps

- Replace placeholder personal information with real resume content
- Update the page title and metadata in `resume/index.html`
- Replace the default Vite assets with project-specific branding
- Improve the visual layout and responsive design
- Add deployment configuration if publishing to GitHub Pages
