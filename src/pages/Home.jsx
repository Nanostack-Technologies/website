import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import State from "../components/State";
import Why from "../components/Why";
import Expertise from "../components/Expertise";
import Projects from "../components/Projects";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Smooth Scroll Target Sections */}
      <section id="home" className="pt-[50px] md:pt-[50px] scroll-mt-[50px] md:scroll-mt-[50px]">
        <Hero />
      </section>

      <section id="statistics" className="scroll-mt-[110px] md:scroll-mt-[120px]"><State /></section>
      <section id="why" className="scroll-mt-[110px] md:scroll-mt-[120px]"><Why /></section>
      <section id="expertise" className="scroll-mt-[110px] md:scroll-mt-[120px]"><Expertise /></section>
      <section id="projects" className="scroll-mt-[110px] md:scroll-mt-[120px]"><Projects /></section>
      <section id="testimonials" className="scroll-mt-[110px] md:scroll-mt-[120px]"><Testimonial /></section>
      <section id="contact" className="scroll-mt-[110px] md:scroll-mt-[120px]"><Contact /></section>


      <Footer />
    </div>
  );
}
