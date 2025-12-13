import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ResourcesSection from '@/components/ResourcesSection';
import FounderSection from '@/components/FounderSection';
import SubscribeSection from '@/components/SubscribeSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProjectsSection />
      <ResourcesSection />
      <FounderSection />
      <SubscribeSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
