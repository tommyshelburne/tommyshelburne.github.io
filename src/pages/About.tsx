import AnimatedSection from '../components/AnimatedSection';

const skills = [
  {
    category: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'C#', 'C++', 'Java', 'SQL'],
  },
  {
    category: 'AI & Agents',
    items: ['Agent orchestration', 'Agent safety & guardrails', 'LLM evals', 'LLM integration (Claude, GPT-4o)', 'Embeddings'],
  },
  {
    category: 'Backend & Data',
    items: ['.NET 10 / ASP.NET Core', 'EF Core', 'Node.js', 'LangGraph', 'PostgreSQL', 'Supabase', 'Firebase', 'REST APIs'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'Zustand', 'Blazor'],
  },
  {
    category: 'Tools & Practices',
    items: ['Git/GitHub', 'Docker', 'Linux', 'systemd', 'CI/CD'],
  },
];

const About = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <AnimatedSection>
          <p className="eyebrow mb-4">About</p>
          <h1 className="font-display text-4xl sm:text-5xl text-stone-900 dark:text-stone-100 mb-12">
            A little background<span className="text-primary-500">.</span>
          </h1>
        </AnimatedSection>

        {/* Bio Section */}
        <AnimatedSection delay={0.1}>
          <div className="flex flex-col md:flex-row gap-10 items-start mb-20">
            <div className="relative flex-shrink-0">
              <div
                aria-hidden
                className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-primary-400/60 dark:border-primary-500/40"
              />
              <div className="relative w-48 h-56 md:w-56 md:h-64 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/headshot.jpg"
                  alt="Tommy Shelburne"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            <div className="max-w-none">
              <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                I'm a full-stack AI software engineer. I specialize in making AI systems
                trustworthy: agent guardrails, LLM evaluation harnesses, and tamper-evident
                audit trails. I founded Pursuvo, a multi-tenant SaaS platform automating
                government business development, and previously built BidMatch at KomBea,
                an automated contract pipeline that surfaced and qualified 35+ government
                opportunities from a standing start.
              </p>
              <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                I ship React/TypeScript frontends on .NET and Python backends. I hold a
                B.S. in Computer Science from the University of Utah (December 2025), where
                my senior capstone GrooveKit, a cross-platform educational DAW, won the
                "Coolest Project" award at the showcase.
              </p>
              <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
                I speak English natively and French proficiently.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection delay={0.2}>
          <div className="flex items-center gap-6 mb-10">
            <p className="eyebrow whitespace-nowrap">Skills & Technologies</p>
            <div className="h-px flex-grow bg-stone-200 dark:bg-stone-800" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-6"
              >
                <h3 className="font-display text-xl text-stone-900 dark:text-stone-100 mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-700 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Experience Section */}
        <AnimatedSection delay={0.3}>
          <div className="flex items-center gap-6 mb-10">
            <p className="eyebrow whitespace-nowrap">Experience</p>
            <div className="h-px flex-grow bg-stone-200 dark:bg-stone-800" />
          </div>
          <div className="space-y-10 mb-20">
            <div className="border-l-2 border-primary-500 pl-6">
              <p className="font-mono text-xs uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1">
                April 2026 – Present · Remote
              </p>
              <h3 className="font-display text-2xl text-stone-900 dark:text-stone-100 mb-3">
                Founder · Pursuvo
              </h3>
              <ul className="list-disc list-outside ml-4 text-stone-600 dark:text-stone-300 space-y-2 leading-relaxed">
                <li>Founded Pursuvo, a multi-tenant SaaS platform automating government business development: opportunity ingestion, configurable scoring, POC enrichment, and multi-step outreach with CAN-SPAM compliance</li>
                <li>Designed a hexagonal architecture with row-level tenant isolation, pluggable CRM adapters (Pipedrive, HubSpot, Salesforce), and a rule-based scoring engine; 986 passing unit and integration tests (.NET 10, PostgreSQL, EF Core)</li>
              </ul>
            </div>

            <div className="border-l-2 border-primary-500 pl-6">
              <p className="font-mono text-xs uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1">
                June 2026 · Salt Lake City, UT (Hybrid)
              </p>
              <h3 className="font-display text-2xl text-stone-900 dark:text-stone-100 mb-3">
                Co-Founder · Intro
              </h3>
              <ul className="list-disc list-outside ml-4 text-stone-600 dark:text-stone-300 space-y-2 leading-relaxed">
                <li>Built the evaluation harness for Intro's GPT-4o student matching engine (Next.js, Supabase): CI workflows for automated and LLM-graded match quality, stress tests, and match-breakdown diagnostics</li>
                <li>Shipped the embedding-based interest derivation route and authored the compliance posture behind university deals: DPIA, data-flow architecture, incident response, disaster recovery, and HECVAT (FERPA, Utah GDPA)</li>
              </ul>
            </div>

            <div className="border-l-2 border-stone-300 dark:border-stone-700 pl-6">
              <p className="font-mono text-xs uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1">
                January 2026 – April 2026 · Lehi, UT
              </p>
              <h3 className="font-display text-2xl text-stone-900 dark:text-stone-100 mb-3">
                Software Engineer (Contract) · KomBea Corp.
              </h3>
              <ul className="list-disc list-outside ml-4 text-stone-600 dark:text-stone-300 space-y-2 leading-relaxed">
                <li>Built BidMatch, an automated SAM.gov → PostgreSQL → Pipedrive pipeline (.NET 10, C#) that surfaced and qualified 35+ government opportunities from zero, deployed as a systemd service with concurrency-safe writes</li>
                <li>Architected an 8-agent AI system coordinating research, lead qualification, POC targeting, and outreach autonomously, with no prior AI infrastructure at the company</li>
              </ul>
            </div>

            <div className="border-l-2 border-stone-300 dark:border-stone-700 pl-6">
              <p className="font-mono text-xs uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1">
                June 2020 – January 2025 · South Jordan, UT
              </p>
              <h3 className="font-display text-2xl text-stone-900 dark:text-stone-100 mb-3">
                Shift Lead · Culver's
              </h3>
              <ul className="list-disc list-outside ml-4 text-stone-600 dark:text-stone-300 space-y-2 leading-relaxed">
                <li>Led shifts of 10+ team members and trained 15+ new hires while completing a CS degree</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Education Section */}
        <AnimatedSection delay={0.4}>
          <div className="flex items-center gap-6 mb-10">
            <p className="eyebrow whitespace-nowrap">Education</p>
            <div className="h-px flex-grow bg-stone-200 dark:bg-stone-800" />
          </div>
          <div className="border-l-2 border-primary-500 pl-6">
            <p className="font-mono text-xs uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1">
              December 2025 · Salt Lake City, UT
            </p>
            <h3 className="font-display text-2xl text-stone-900 dark:text-stone-100">
              B.S. Computer Science · University of Utah
            </h3>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;
