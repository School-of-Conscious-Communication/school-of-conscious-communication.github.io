import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      // Submit to Netlify function endpoint
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok || response.status === 303) {
        // 303 is expected redirect after form submission
        setIsSubmitted(true);
        toast({
          title: "Message sent!",
          description: "I'll get back to you within 24 hours.",
        });
      } else {
        console.error("Form submission response:", response.status);
        throw new Error(`Failed to submit form (${response.status})`);
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
        <h3 className="text-2xl font-display font-semibold mb-2">Thanks for reaching out!</h3>
        <p className="text-muted-foreground">We'll be in touch soon.</p>
      </div>
    );
  }

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
            onSubmit={handleSubmit}
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
              <Label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Jane Smith"
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
              <Label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="jane@example.com"
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
              <Label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your vision, timeline, or any questions you have..."
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
            <Button type="submit" variant="default" size="lg" className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl
                bg-gradient-to-r from-rose to-rose-glow text-background font-medium
                hover:shadow-lg hover:shadow-rose/25 transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-rose/50" disabled={isSubmitting}>
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </Button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
