import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  color: 'violet' | 'indigo' | 'teal' | 'gold' | 'rose';
  index: number;
}

const colorClasses = {
  violet: {
    bg: 'bg-violet/10',
    border: 'border-violet/20',
    text: 'text-violet',
    hover: 'hover:border-violet/50 hover:bg-violet/15',
    glow: 'glow-violet',
    gradient: 'from-violet/20 to-transparent',
  },
  indigo: {
    bg: 'bg-indigo/10',
    border: 'border-indigo/20',
    text: 'text-indigo',
    hover: 'hover:border-indigo/50 hover:bg-indigo/15',
    glow: 'glow-indigo',
    gradient: 'from-indigo/20 to-transparent',
  },
  teal: {
    bg: 'bg-teal/10',
    border: 'border-teal/20',
    text: 'text-teal',
    hover: 'hover:border-teal/50 hover:bg-teal/15',
    glow: 'glow-teal',
    gradient: 'from-teal/20 to-transparent',
  },
  gold: {
    bg: 'bg-gold/10',
    border: 'border-gold/20',
    text: 'text-gold',
    hover: 'hover:border-gold/50 hover:bg-gold/15',
    glow: 'glow-gold',
    gradient: 'from-gold/20 to-transparent',
  },
  rose: {
    bg: 'bg-rose/10',
    border: 'border-rose/20',
    text: 'text-rose',
    hover: 'hover:border-rose/50 hover:bg-rose/15',
    glow: 'glow-rose',
    gradient: 'from-rose/20 to-transparent',
  },
};

const ProjectCard = ({ title, description, link, color, index }: ProjectCardProps) => {
  const colors = colorClasses[color];
  
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block p-6 md:p-8 rounded-2xl border backdrop-blur-sm transition-all duration-500 
        ${colors.bg} ${colors.border} ${colors.hover}
        opacity-0 animate-fade-in`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Gradient corner accent */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${colors.gradient} rounded-tr-2xl opacity-50`} />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <h3 className={`font-serif text-2xl md:text-3xl font-medium ${colors.text}`}>
            {title}
          </h3>
          <ExternalLink className={`w-5 h-5 ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1`} />
        </div>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Hover glow effect */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${colors.glow}`} />
    </a>
  );
};

export default ProjectCard;
