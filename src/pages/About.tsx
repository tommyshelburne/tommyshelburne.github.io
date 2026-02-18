import AnimatedSection from '../components/AnimatedSection';

const skills = [
  {
    category: 'Languages',
    items: ['C++', 'C#', 'Java', 'Python', 'SQL', 'Kotlin'],
  },
  {
    category: 'Frameworks & Platforms',
    items: ['.NET MAUI', 'Firebase', 'JUCE', 'Android (Jetpack Compose)', 'React', 'TypeScript'],
  },
  {
    category: 'Tools & Practices',
    items: ['Git/GitHub', 'Docker', 'Linux', 'REST APIs', 'JUnit', 'MSTest', 'GTest'],
  },
];

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <AnimatedSection>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            About Me
          </h1>
        </AnimatedSection>

        {/* Bio Section */}
        <AnimatedSection delay={0.1}>
          <div className="prose dark:prose-invert max-w-none mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              I'm a software developer with hands-on experience building cross-platform applications,
              Android apps, and client/server systems. I have a strong foundation in C++, C#, and Java
              with a focus on clean architecture, UI development, and real-time interaction.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              I recently completed my B.S. in Computer Science at the University of Utah (December 2025),
              where my senior capstone — GrooveKit, a cross-platform educational DAW — gave me deep
              experience in team-based software engineering, event-driven UI architecture, and shipping
              real software across platforms.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I speak English natively and French at an intermediate-advanced level.
            </p>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection delay={0.2}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Experience/Education Section */}
        <AnimatedSection delay={0.3}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Experience
          </h2>
          <div className="space-y-8">
            <div className="border-l-4 border-primary-500 pl-6">
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Director, GTM Operations & Strategic Programs
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  KomBea Corp. (Contract) • January 2026 – Present • Lehi, UT
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Built and maintained GTM operational infrastructure to support enterprise deal flow</li>
                <li>Researched enterprise target accounts and executives for high-context outreach</li>
                <li>Shaped ROI framing and transformation narratives for financed pilot motions</li>
                <li>Coordinated executive-facing programs tied to Utah Tech Week and Silicon Slopes</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary-500 pl-6">
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Sr Team Member
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Café Zupas • February 2025 – Present • Salt Lake City, UT
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Work with digital ordering and scheduling systems in a fast-paced environment</li>
                <li>Identify and suggest improvements to prep-line efficiency weekly</li>
              </ul>
            </div>

            <div className="border-l-4 border-primary-500 pl-6">
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Shift Lead
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Culver's • June 2020 – January 2025 • South Jordan, UT
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Led shifts and supervised over 10 people in a high-pressure setting</li>
                <li>Analyzed inventory and staffing data using Excel and internal tools</li>
                <li>Mentored and trained at least 15 new hires</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Education Section */}
        <AnimatedSection delay={0.4}>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 mt-12">
            Education
          </h2>
          <div className="border-l-4 border-primary-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              University of Utah • December 2025 • Salt Lake City, UT
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;
