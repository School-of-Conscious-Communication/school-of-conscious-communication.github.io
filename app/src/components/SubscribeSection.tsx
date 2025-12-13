import { useState } from 'react';
import { Send } from 'lucide-react';
import SectionHeader from './SectionHeader';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');

  return (
    <section id="subscribe" className="relative py-24 md:py-32">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal/5 to-transparent" />
      
      <div className="relative container mx-auto px-6">
        <SectionHeader 
          title="Stay Connected" 
          subtitle="Subscribe to receive updates on new projects and resources"
        />
        
        <div className="max-w-md mx-auto opacity-0 animate-fade-in">
          <form
            name="subscribe"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="relative"
          >
            <input type="hidden" name="form-name" value="subscribe" />
            <p className="hidden">
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>
            
            <div className="relative group">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-6 py-4 pr-14 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm
                  text-foreground placeholder:text-muted-foreground
                  focus:outline-none focus:border-teal/50 focus:ring-2 focus:ring-teal/20
                  transition-all duration-300"
              />
              
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-lg
                  bg-gradient-to-r from-teal to-teal-glow text-background
                  hover:shadow-lg hover:shadow-teal/25 transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-teal/50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
          
          <p className="text-center text-sm text-muted-foreground mt-4">
            No spam, only meaningful updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
