import AnimatedSection from '../components/AnimatedSection';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimatedSection>
          <div className="mb-16">
            <p className="eyebrow mb-4">Projects</p>
            <h1 className="font-display text-4xl sm:text-5xl text-stone-900 dark:text-stone-100 mb-4">
              Things I've built<span className="text-primary-500">.</span>
            </h1>
            <p className="text-lg text-stone-600 dark:text-stone-400 max-w-2xl">
              Production platforms, automation pipelines, and the occasional audio
              engine. Each one a different challenge.
            </p>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-stone-600 dark:text-stone-400">
              No projects to display yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
