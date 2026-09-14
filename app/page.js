import { GradientWave } from "@/components/ui/gradient-wave";
import BuiltFor from "./components/BuiltFor";
import Difference from "./components/Difference";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import PageLoader from "./components/PageLoader";
import PlatformSnapshot from "./components/PlatformSnapshot";
import Pricing from "./components/Pricing";
import RequestPilot from "./components/RequestPilot";
import Reveal from "./components/Reveal";
import Security from "./components/Security";
import Showcase from "./components/Showcase";
import SocialProof from "./components/SocialProof";
import WhyNow from "./components/WhyNow";
import Workflow from "./components/Workflow";

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
          <PlatformSnapshot />
          <Difference />
          <Features />
          <Workflow />
          <Showcase />
          <WhyNow />
          <BuiltFor />
          <SocialProof />
          <Security />
          <Pricing />
          <RequestPilot />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
