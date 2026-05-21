import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Philosophy from "@/components/Philosophy";
import Pricing from "@/components/Pricing";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main data-testid="home-page" className="bg-[#1A1A1A] text-white overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Philosophy />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
