import AnimatedSection from '../components/AnimatedSection';

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Next.js', 'Vue.js'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  },
  {
    category: 'Tools & Other',
    items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack', 'Vite'],
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
              Hi! I'm Tommy Shelburne, a passionate full-stack developer with a love for creating
              elegant solutions to complex problems. I specialize in building modern web applications
              that are both beautiful and functional.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              My journey in software development started with a curiosity about how things work,
              and it has evolved into a career focused on crafting exceptional user experiences.
              I believe in writing clean, maintainable code and staying up-to-date with the latest
              technologies and best practices.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community.
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
            {/* Experience Item 1 */}
            <div className="border-l-4 border-primary-500 pl-6">
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Full Stack Developer
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Company Name • 2022 - Present
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Developed and maintained full-stack web applications</li>
                <li>Collaborated with cross-functional teams to deliver features</li>
                <li>Implemented responsive designs and improved user experience</li>
                <li>Optimized application performance and reduced load times</li>
              </ul>
            </div>

            {/* Experience Item 2 */}
            <div className="border-l-4 border-primary-500 pl-6">
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Frontend Developer
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Previous Company • 2020 - 2022
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Built responsive web interfaces using React and TypeScript</li>
                <li>Worked closely with designers to implement pixel-perfect UIs</li>
                <li>Participated in code reviews and mentored junior developers</li>
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
              University Name • Graduated 2020
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;
