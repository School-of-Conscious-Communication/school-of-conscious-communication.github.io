import ProjectCard from './ProjectCard';
import SectionHeader from './SectionHeader';

const projects = [
  {
    title: 'Time Translator',
    description: 'A tool designed to help translate time across different contexts and frameworks, enabling clearer understanding of temporal concepts in communication.',
    link: 'https://school-of-conscious-communication.github.io/time-translator/',
    color: 'violet' as const,
  },
  {
    title: 'Card Decks',
    description: 'Interactive card-based tools for reflection, learning, and facilitating meaningful conversations about consciousness and communication.',
    link: 'https://school-of-conscious-communication.github.io/card-renderer/',
    color: 'teal' as const,
  },
  {
    title: 'Inflow Matrix',
    description: 'Explore the interconnected patterns of information flow and how they shape our understanding and interactions with others.',
    link: '#',
    color: 'indigo' as const,
  },
  {
    title: 'Synergy Map',
    description: 'Visualize and understand the synergistic relationships between ideas, people, and concepts in collaborative environments.',
    link: '#',
    color: 'gold' as const,
  },
  {
    title: 'Knowledge Sharing Community',
    description: 'A platform dedicated to the open exchange of insights, wisdom, and practical knowledge for conscious communicators.',
    link: '#',
    color: 'rose' as const,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      
      <div className="relative container mx-auto px-6">
        <SectionHeader 
          title="Projects" 
          subtitle="Tools and platforms designed to enhance conscious communication and understanding"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
