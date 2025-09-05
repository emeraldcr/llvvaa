import About from "../components/about";
import Adventures from "../components/adventures";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Hero from "../components/home";
import Nav from "../components/nav";
import Services from "../components/services";
import HeroSustainability from "../components/sustain";
import Testimonials from "../components/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Nav></Nav>
      <Hero></Hero>
      <Services></Services>
      <About></About>
      <Adventures></Adventures>
      <HeroSustainability></HeroSustainability>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}