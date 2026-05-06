import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'meridian',
    title: 'Meridian',
    description: 'A multi-tenant SaaS platform automating government business development — opportunity ingestion, configurable scoring, POC enrichment, and multi-step outreach with CAN-SPAM compliance.',
    longDescription: 'Designed a clean hexagonal architecture with row-level tenant isolation, pluggable CRM/email adapters (Pipedrive, HubSpot, Salesforce), and a rule-based scoring engine. 134 passing tests across unit and integration. Stack: ASP.NET Core 10, C#, PostgreSQL, EF Core, Blazor Server.',
    technologies: ['ASP.NET Core 10', 'C#', 'PostgreSQL', 'EF Core', 'Blazor Server'],
    repoUrl: 'https://github.com/tommyshelburne/meridian',
    featured: true,
  },
  {
    id: 'slc-tech-pulse',
    title: 'SLC Tech Pulse',
    description: 'A React/TypeScript event aggregation app for the Salt Lake City tech scene — unifying events, jobs, and companies that were scattered across 5+ disconnected sites.',
    longDescription: 'Built a unified, filterable UI with Zustand for cross-filter state and Firebase Auth/Firestore for persistence. Designed proper error boundaries and responsive layouts. Stack: React, TypeScript, Vite, Tailwind CSS, Zustand, Firebase.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Zustand', 'Firebase'],
    repoUrl: 'https://github.com/tommyshelburne/slc-tech-pulse',
    featured: true,
  },
  {
    id: 'groovekit',
    title: 'GrooveKit',
    description: '"Coolest Project" award winner at the Senior Capstone showcase — a modular, cross-platform educational DAW built in C++ and the JUCE audio framework.',
    longDescription: 'Designed and implemented a component-based GUI architecture coordinating real-time playback, editing, and audio processing. Collaborated within a small engineering team using GitHub for version control, pull requests, and code reviews.',
    technologies: ['C++', 'JUCE', 'CLion', 'Git/GitHub'],
    repoUrl: 'https://github.com/tommyshelburne/GrooveKit',
    featured: true,
  },
  {
    id: 'mission-control',
    title: 'Mission Control',
    description: 'An internal ops dashboard for monitoring and orchestrating a fleet of background agents — Next.js + TypeScript with a SQLite-backed task queue.',
    longDescription: 'Self-hosted ops dashboard exposed over Tailscale, with a push-based task assignment model (cron polls SQLite, dispatches via Redis streams). Used daily to monitor agent health, route tasks, and inspect job state.',
    technologies: ['Next.js', 'TypeScript', 'React', 'SQLite', 'Tailwind CSS'],
    repoUrl: 'https://github.com/tommyshelburne/mission-control',
    featured: false,
  },
  {
    id: 'drawing-app',
    title: 'Drawing App',
    description: 'An Android app with customizable pen tools, cloud image storage, and user authentication via Google Firebase.',
    longDescription: 'Built an Android application using Kotlin to support drawing images with various pen settings. Integrated Google Firebase for cloud storage, image sharing, and authentication. Implemented MVVM with modern Jetpack Compose features such as a scrollable gallery view.',
    technologies: ['Kotlin', 'Java', 'Android Studio', 'Firebase', 'Jetpack Compose'],
    repoUrl: 'https://github.com/tommyshelburne/drawing-app',
    featured: false,
  },
];
