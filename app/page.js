import { GradientWave } from "@/components/ui/gradient-wave";
import BuiltFor from "./components/BuiltFor";
import Difference from "./components/Difference";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import PageLoader from "./components/PageLoader";
import Proctor from "./components/Proctor";
import RequestPilot from "./components/RequestPilot";
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
