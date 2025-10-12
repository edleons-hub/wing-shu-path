import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import History from '@/components/History';
import Philosophy from '@/components/Philosophy';
import Techniques from '@/components/Techniques';
import Schedule from '@/components/Schedule';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <History />
        <Philosophy />
        <Techniques />
        <Schedule />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
