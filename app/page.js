import Nav from './components/Nav';
import Hero from './components/Hero';
import Difference from './components/Difference';
import Proctor from './components/Proctor';
import Workflow from './components/Workflow';
import WhyNow from './components/WhyNow';
import BuiltFor from './components/BuiltFor';
import RequestPilot from './components/RequestPilot';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import { GradientWave } from '@/components/ui/gradient-wave';

export default function Home() {
  return (
    <>
      <PageLoader />
      {/* Sticky full-website background */}
      <div className="sticky-bg-wrapper" aria-hidden="true">
        <GradientWave />
      </div>

      <a href="#main" className="skip-link">Skip to main content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Difference />
        <Proctor />
        <Workflow />
        <WhyNow />
        <BuiltFor />
        <RequestPilot />
      </main>
      <Footer />
    </>
  );
}
