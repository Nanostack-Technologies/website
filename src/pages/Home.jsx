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
      <section id="home"><Hero /></section>
      <section id="statistics"><State /></section>
      <section id="why"><Why /></section>
      <section id="expertise"><Expertise /></section>
      <section id="projects"><Projects /></section>
      <section id="testimonials"><Testimonial /></section>
      <section id="contact"><Contact /></section>

      <Footer />
    </div>
  );
}
