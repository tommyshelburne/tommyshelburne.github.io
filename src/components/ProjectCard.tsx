import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group flex flex-col bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/60 dark:hover:border-primary-500/50 hover:shadow-xl hover:shadow-stone-900/5 dark:hover:shadow-black/30"
    >
      {/* Cover */}
      {project.imageUrl && (
        <div className="aspect-[16/10] overflow-hidden border-b border-stone-200 dark:border-stone-800">
          <img
            src={project.imageUrl}
            alt={`${project.title} cover art`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <div className="flex items-baseline justify-between mb-3">
          <h3 className="font-display text-2xl text-stone-900 dark:text-stone-100">
            {project.title}
          </h3>
          <span className="font-mono text-xs text-stone-400 dark:text-stone-600">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-400 mb-5">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 font-mono text-[11px] uppercase tracking-wide text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-700 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
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
    </motion.article>
  );
};

export default ProjectCard;
