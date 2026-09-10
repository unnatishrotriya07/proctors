import { GradientWave } from "@/components/ui/gradient-wave";
import Audience from "./components/Audience";
import Curriculum from "./components/Curriculum";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import PageLoader from "./components/PageLoader";
import Platform from "./components/Platform";
import Problem from "./components/Problem";
import RequestPilot from "./components/RequestPilot";
import Reveal from "./components/Reveal";
import Security from "./components/Security";
import Showcase from "./components/Showcase";
import TeacherInsight from "./components/TeacherInsight";
import TrustStrip from "./components/TrustStrip";

export default function Home() {
  return (
    <>
      <PageLoader />
      {/* Sticky full-website background */}
      <div aria-hidden="true" className="sticky-bg-wrapper">
        <GradientWave />
      </div>

      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Reveal>
          <TrustStrip />
          <Problem />
          <Platform />
          <Showcase />
          <Curriculum />
          <TeacherInsight />
          <Audience />
          <Security />
          <RequestPilot />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
