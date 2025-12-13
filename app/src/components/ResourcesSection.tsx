import { FileText, ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';

const resources = [
  {
    title: 'GitHub Organization',
    description: 'Check out our open source projects and contribute on GitHub.',
    link: 'https://github.com/School-of-Conscious-Communication',
  },
  {
    title: 'Youtube Channel',
    description: 'Elijah recorded thousands of hours of teachings on conscious communication which you can access for free on Youtube.',
    link: 'https://www.youtube.com/@schoolofconsciouscommunica2761/',
  },
  {
    title: 'The Inflow Matrix',
    description: 'Website where Elijah documented some of his work on the Inflow Matrix and conscious communication.',
    link: 'https://thecanadianfrontlines.weebly.com/',
  }
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Resources" 
          subtitle="Materials and guides to support your journey in conscious communication"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <a
              key={resource.title}
              href={resource.link}
              className="group relative p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm 
                hover:border-violet/30 hover:bg-card/80 transition-all duration-300
                opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-violet/10">
                  <FileText className="w-5 h-5 text-violet" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-serif text-xl font-medium text-foreground group-hover:text-violet transition-colors">
                      {resource.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {resource.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
