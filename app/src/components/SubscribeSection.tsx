import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const SubscribeSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
  });
  const [email, setEmail] = useState('');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok || response.status === 303) {
        // 303 is expected redirect after form submission
        setIsSubmitted(true);
        toast({
          title: "Subscribed!",
          description: "You've been added to our mailing list.",
        });
      } else {
        console.error("Form submission response:", response.status);
        throw new Error(`Failed to subscribe (${response.status})`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit form",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-success" />
        </div>
        <h3 className="text-2xl font-display font-semibold mb-2">Thanks for subscribing!</h3>
        <p className="text-muted-foreground">You'll receive our next update as soon as it comes out.</p>
      </div>
    );
  }

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
            onSubmit={handleSubmit}
            name="subscribe"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="relative"
          >
            <input type="hidden" name="form-name" value="subscribe" />
            <input type="hidden" name="form-subject" value="Subscribed" />

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
