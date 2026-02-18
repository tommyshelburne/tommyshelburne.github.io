import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'GrooveKit',
    description: 'A cross-platform educational DAW built as a senior capstone project using C++ and the JUCE audio framework.',
    longDescription: 'Designed and implemented a modular, component-based GUI architecture for a cross-platform educational DAW. Collaborated within a small engineering team using GitHub for version control, pull requests, and code reviews. Implemented event-driven UI interactions coordinating playback, editing, and real-time user input. Coordinated with a custom AppEngine backend to align UI behavior with application logic and audio processing.',
    technologies: ['C++', 'JUCE', 'CLion', 'Git/GitHub'],
    featured: true,
  },
  {
    id: '2',
    title: 'Drawing App',
    description: 'An Android app with customizable pen tools, cloud image storage, and user authentication via Google Firebase.',
    longDescription: 'Created an Android application using Kotlin and Android Studio to support drawing images with various pen settings. Utilized Google Firebase for cloud storage, image sharing, and user authentication/authorization. Implemented MVVM programming practices with modern Jetpack Compose features such as a scrollable gallery view.',
    technologies: ['Kotlin', 'Java', 'Android Studio', 'Firebase', 'Jetpack Compose'],
    featured: true,
  },
  {
    id: '3',
    title: 'Agar.io Client',
    description: 'A multiplayer game client in C# with .NET MAUI, communicating with a game server via JSON-serialized packets in real time.',
    longDescription: 'Implemented a C# client using .NET MAUI that communicated with a multiplayer game server via JSON-serialized packets, handling real-time user input and dynamic game state updates.',
    technologies: ['C#', '.NET MAUI', '.NET Framework', 'Visual Studio', 'JSON'],
    featured: false,
  },
];
