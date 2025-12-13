import { Linkedin, Globe } from 'lucide-react';
import SectionHeader from './SectionHeader';

const FounderSection = () => {
  return (
    <section id="founder" className="relative py-24 md:py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo/5 to-transparent" />
      
      <div className="relative container mx-auto px-6">
        <SectionHeader 
          title="Founder" 
          subtitle="Originator of the School of Conscious Communication"
        />
        
        <div className="max-w-2xl mx-auto text-center opacity-0 animate-fade-in">
          {/* Avatar placeholder with gradient */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-violet via-indigo to-teal p-0.5">
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
              <img src="/img/elijah-square.jpg" alt="Elijah Ignatieff" className="w-full h-full rounded-full object-cover" />
            </div>
          </div>
          
          <h3 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-4">
            Elijah Ignatieff
          </h3>
          
          <p className="text-muted-foreground leading-relaxed mb-8">
            Elijah dedicated more than 30 years of his life to exploring the depths of human connection and communication.

            Elijah founded the School of Conscious Communication to share tools and insights 
            that help people engage more meaningfully with themselves and others.
          </p>
          <p className='text-muted-foreground leading-relaxed mb-8'>
            He built the "Inflow Matrix"—a gameworld of maps, cards, and systems designed to help humanity navigate consciousness and communication.
          </p>
          <p className='text-muted-foreground leading-relaxed mb-8'>
            Elijah passed in 2023, leaving behind a rich legacy of tools that continue to evolve through the communities he touched. His work lives on through those who carry it forward.
          </p>
          <p className='text-muted-foreground leading-relaxed mb-8'>
            More about Elijah's journey and teachings coming soon...
          </p>
          
          {/* Links */}
          {/* <div className="flex items-center justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/lia-pas/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 
                bg-card/50 hover:border-indigo/50 hover:bg-indigo/10 transition-all duration-300 group"
            >
              <Linkedin className="w-4 h-4 text-indigo" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                LinkedIn
              </span>
            </a>
            
            <a
              href="https://www.facebook.com/elijah.ignatieff/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 
                bg-card/50 hover:border-violet/50 hover:bg-violet/10 transition-all duration-300 group"
            >
              <Globe className="w-4 h-4 text-violet" />
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                OnFacebook
              </span>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
