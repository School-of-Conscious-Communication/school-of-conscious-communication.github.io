import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative py-12 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <img src="/img/school of conscious communication.jpg" alt="School of Conscious Communication Logo" className="w-8 h-8 rounded-full object-cover" />
            <span className="font-serif text-lg gradient-text">School of Conscious Communication</span>
          </div>
          
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#projects" className="hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#resources" className="hover:text-foreground transition-colors">
              Resources
            </a>
            <a href="#founder" className="hover:text-foreground transition-colors">
              Founder
            </a>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-rose fill-rose" />
            <span>© {currentYear}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
