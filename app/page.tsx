import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import FeaturedWork from "./sections/FeaturedWork";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}