import { landing } from '@/content/ja/landing';
import { works } from '@/data/works';
import Header from '@/components/organisms/Header';
import HeroSection from '@/components/organisms/HeroSection';
import PhilosophySection from '@/components/organisms/PhilosophySection';
import MaterialSection from '@/components/organisms/MaterialSection';
import FeaturedWorksSection from '@/components/organisms/FeaturedWorksSection';
import ProcessSection from '@/components/organisms/ProcessSection';
import FAQSection from '@/components/organisms/FAQSection';
import ContactSection from '@/components/organisms/ContactSection';
import Footer from '@/components/organisms/Footer';
import AIConciergeFAB from '@/features/chatbot/components/AIConciergeFAB';

export default function Home() {
  const featuredWorks = works.filter((w) => w.featured).slice(0, 3);

  return (
    <>
      <Header content={landing.nav} />
      <main>
        <HeroSection content={landing.hero} />
        <PhilosophySection content={landing.philosophy} />
        <MaterialSection content={landing.materials} />
        <FeaturedWorksSection content={landing.featuredWorks} works={featuredWorks} />
        <ProcessSection content={landing.process} />
        <FAQSection content={landing.faq} />
        <ContactSection content={landing.contact} />
      </main>
      <Footer content={landing.footer} />
      <AIConciergeFAB content={landing.aiConcierge} />
    </>
  );
}
