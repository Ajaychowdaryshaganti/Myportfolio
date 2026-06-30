import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import HireMe from "@/components/HireMe";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NotifyOnLoad from "@/components/NotifyOnLoad";

export default function Home() {
  return (
    <>
      <NotifyOnLoad />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <HireMe />
        <Services />
        <Portfolio />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
