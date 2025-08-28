import Home from "./components/Home";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Testimonials from "./components/Testimonials";
import PortfolioSection from "./components/Page4";
import ContactSection from "./components/Contact";
import FooterSection from "./components/Footer";



export default function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Home />
        <Services />
        <Solutions />
        <Page1 />
        <Page2 />
        <Page3 />
        <Testimonials />
        <PortfolioSection />
        <ContactSection />
        <FooterSection />
      </div>

    </>
  )
}