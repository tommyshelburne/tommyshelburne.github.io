import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import AnimatedSection from '../components/AnimatedSection';
import { projects } from '../data/projects';
import type { Project } from '../types';

const heroStagger = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: 'easeOut' as const },
  }),
};

const FeaturedRow = ({ project, index }: { project: Project; index: number }) => {
  const imageFirst = index % 2 === 0;

  return (
    <AnimatedSection delay={0.1}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Cover */}
        <div className={`md:col-span-7 ${imageFirst ? '' : 'md:order-2'}`}>
          <div className="group rounded-xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-lg shadow-stone-900/5 dark:shadow-black/30">
            <img
              src={project.imageUrl}
              alt={`${project.title} cover art`}
              loading={index === 0 ? 'eager' : 'lazy'}
              className="w-full transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        {/* Content */}
        <div className={`md:col-span-5 ${imageFirst ? '' : 'md:order-1'}`}>
          <p className="font-mono text-sm text-primary-600 dark:text-primary-400 mb-3">
            {String(index + 1).padStart(2, '0')}
          </p>
          <h3 className="font-display text-3xl sm:text-4xl text-stone-900 dark:text-stone-100 mb-4">
            {project.title}
          </h3>
          <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-6">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-700 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-5">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              >
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                Live demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              >
                <CodeBracketIcon className="h-4 w-4" />
                Code
              </a>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

const Home = () => {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background texture */}
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-dots text-stone-300 dark:text-stone-800 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]" />
          <div className="absolute -top-32 right-[-10%] h-[480px] w-[480px] rounded-full bg-primary-500/10 dark:bg-primary-500/15 blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto w-full py-24">
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={heroStagger}
            className="eyebrow mb-6"
          >
            <span className="hidden sm:inline">Tommy Shelburne · </span>
            Software Engineer · Salt Lake City
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={heroStagger}
            className="font-display text-5xl sm:text-6xl lg:text-7xl text-stone-900 dark:text-stone-100 leading-[1.05] mb-8 max-w-4xl"
          >
            I build <em className="text-primary-600 dark:text-primary-400">production</em> SaaS
            and the automation behind it.
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={heroStagger}
            className="text-lg text-stone-600 dark:text-stone-400 mb-10 max-w-2xl leading-relaxed"
          >
            Currently shipping Meridian, a multi-tenant government BD platform on
            ASP.NET Core and PostgreSQL. Previously built BidMatch at KomBea, an
            8-agent pipeline that surfaced 35+ qualified government opportunities
            from a standing start.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={heroStagger}
            className="flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-7 py-3 font-medium rounded-lg text-stone-50 bg-stone-900 hover:bg-primary-600 dark:text-stone-900 dark:bg-stone-100 dark:hover:bg-primary-400 transition-colors"
            >
              View my work
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 py-3 font-medium rounded-lg border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Get in touch
            </Link>
            <span className="inline-flex items-center gap-2 sm:ml-4 font-mono text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
              </span>
              Open to full-time roles
            </span>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900/40">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="flex items-center gap-6 mb-10 sm:mb-16">
              <p className="eyebrow whitespace-nowrap">01 / Selected work</p>
              <div className="h-px flex-grow bg-stone-200 dark:bg-stone-800" />
              <Link
                to="/projects"
                className="font-mono text-xs uppercase tracking-wider text-stone-500 dark:text-stone-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors whitespace-nowrap"
              >
                All projects →
              </Link>
            </div>
          </AnimatedSection>

          <div className="space-y-16 md:space-y-24">
            {featuredProjects.map((project, index) => (
              <FeaturedRow key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-stone-200 dark:border-stone-800">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <p className="eyebrow mb-6">02 / Contact</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-stone-900 dark:text-stone-100 mb-8">
              Let's build something<span className="text-primary-500">.</span>
            </h2>
            <p className="text-lg text-stone-600 dark:text-stone-400 mb-10 max-w-2xl">
              I'm always interested in hearing about new projects and opportunities.
              The fastest way to reach me:
            </p>
            <a
              href="mailto:tommy@shelburne.dev"
              className="font-display italic text-2xl sm:text-4xl text-primary-600 dark:text-primary-400 underline decoration-1 underline-offset-8 hover:text-primary-700 dark:hover:text-primary-300 transition-colors break-all"
            >
              tommy@shelburne.dev
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
