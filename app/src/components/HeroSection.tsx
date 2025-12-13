import { useEffect, useState } from 'react';

const GeometricShape = ({ className, delay = 0 }: { className?: string; delay?: number }) => (
  <div
    className={`absolute opacity-20 ${className}`}
    style={{ animationDelay: `${delay}s` }}
  >
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <polygon
        points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      />
    </svg>
  </div>
);

const FloatingOrb = ({ className, color }: { className?: string; color: string }) => (
  <div
    className={`absolute rounded-full blur-3xl animate-pulse-glow ${className}`}
    style={{ background: `radial-gradient(circle, ${color} 0%, transparent 70%)` }}
  />
);

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-violet/5 via-transparent to-indigo/5" />
      
      {/* Floating orbs */}
      <FloatingOrb 
        className="w-96 h-96 -top-48 -left-48 animate-float" 
        color="hsl(270 70% 60% / 0.15)" 
      />
      <FloatingOrb 
        className="w-80 h-80 top-1/4 -right-40 animate-float-delayed" 
        color="hsl(240 60% 55% / 0.15)" 
      />
      <FloatingOrb 
        className="w-64 h-64 bottom-20 left-1/4 animate-float-slow" 
        color="hsl(175 60% 45% / 0.1)" 
      />
      
      {/* Geometric shapes */}
      <GeometricShape className="w-32 h-32 top-20 left-20 text-violet animate-float" delay={0} />
      <GeometricShape className="w-24 h-24 top-40 right-32 text-indigo animate-float-delayed" delay={1} />
      <GeometricShape className="w-40 h-40 bottom-32 left-40 text-teal animate-float-slow" delay={2} />
      <GeometricShape className="w-20 h-20 bottom-48 right-20 text-gold animate-float" delay={0.5} />
      <GeometricShape className="w-28 h-28 top-1/3 left-1/4 text-rose animate-float-delayed" delay={1.5} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center max-w-4xl">
        <div 
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-8">
            <span className="gradient-text">School of</span>
            <br />
            <span className="text-foreground">Conscious Communication</span>
          </h1>
          
          <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-violet to-transparent mb-8" />
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
            <em className="text-foreground/90">
              Conscious communication powers humanity's evolution towards love, collaboration and acceptance.
            </em>
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            The School of Conscious Communication is about evolving how human beings communicate—moving toward more conscious and effective ways of relating that create higher levels of intimacy, collaboration, and love-happening.
            <br /><br />
            We need tools that bridge two completely different paradigms, and help us navigate the complex fields of human interaction on planet Earth.
            <br /><br />
            These tools empower human beings with distinctions that bring clarity to their life, their voice, and their inhabiting of this body on this planet.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
