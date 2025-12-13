import { useState } from 'react';
import { Send } from 'lucide-react';
import SectionHeader from './SectionHeader';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-rose/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-gold/5 blur-3xl" />
      
      <div className="relative container mx-auto px-6">
        <SectionHeader 
          title="Get in Touch" 
          subtitle="Have questions or ideas? We'd love to hear from you"
        />
        
        <div className="max-w-lg mx-auto opacity-0 animate-fade-in">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm
                  text-foreground placeholder:text-muted-foreground
                  focus:outline-none focus:border-rose/50 focus:ring-2 focus:ring-rose/20
                  transition-all duration-300"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm
                  text-foreground placeholder:text-muted-foreground
                  focus:outline-none focus:border-rose/50 focus:ring-2 focus:ring-rose/20
                  transition-all duration-300"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm
                  text-foreground placeholder:text-muted-foreground resize-none
                  focus:outline-none focus:border-rose/50 focus:ring-2 focus:ring-rose/20
                  transition-all duration-300"
              />
            </div>
            
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl
                bg-gradient-to-r from-rose to-rose-glow text-background font-medium
                hover:shadow-lg hover:shadow-rose/25 transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-rose/50"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
