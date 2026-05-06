import AnimatedSection from '../components/AnimatedSection';

const skills = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'C++', 'C#', 'Java', 'Python', 'SQL'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Vite', 'Tailwind CSS', 'Zustand', 'React Router', 'Jest/Vitest', 'React Testing Library'],
  },
  {
    category: 'Backend & Data',
    items: ['.NET 10', 'C#', 'Node.js', 'PostgreSQL', 'EF Core', 'Firebase', 'REST APIs'],
  },
  {
    category: 'Tools & Practices',
    items: ['Git/GitHub', 'Docker', 'Linux', 'CI/CD', 'Figma'],
  },
  {
    category: 'Learning',
    items: ['Next.js', 'React Query', 'Blazor Server'],
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
          <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
            <div className="w-48 h-56 md:w-56 md:h-64 flex-shrink-0 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/headshot.jpg"
                alt="Tommy Shelburne"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                I'm a software engineer building production SaaS and automation systems.
                I'm currently developing Meridian, a multi-tenant government BD platform on
                ASP.NET Core 10, PostgreSQL, and Blazor Server. Previously, I built BidMatch
                at KomBea — an automated contract pipeline that surfaced and qualified 35+
                government and enterprise opportunities from a standing start.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                I'm comfortable across the stack: React/TypeScript frontends, .NET backends,
                and Linux deployment. I hold a B.S. in Computer Science from the University
                of Utah (December 2025), where my senior capstone — GrooveKit, a cross-platform
                educational DAW — won the "Coolest Project" award at the showcase.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I speak English natively and French at an intermediate-advanced level.
              </p>
            </div>
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
                  Software Engineer (Contract)
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  KomBea Corp. • January 2026 – April 2026 • Lehi, UT
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Built BidMatch, an automated government contract pipeline (SAM.gov → PostgreSQL → Pipedrive CRM) that surfaced and qualified 35+ opportunities from zero prior government business</li>
                <li>Architected a multi-agent AI system (8 agents) coordinating research, qualification, targeting, and outreach workflows autonomously</li>
                <li>Designed data pipelines supporting enterprise deal flow across federal and state government market segments</li>
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
                <li>Led shifts of 10+ team members in a high-volume environment; trained 15+ new hires and consistently maintained service quality under pressure</li>
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
