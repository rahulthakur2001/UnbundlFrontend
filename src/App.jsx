import HeroSection from "./components/HeroSection.jsx";
import Result from "./components/Result.jsx";
import WhyWhistleSection from "./components/WhyWhistleSection.jsx";
import WhistleDifferenceSection from "./components/WhistleDifferenceSection.jsx";
import CompareSection from "./components/CompareSection.jsx";
import StepsSection from "./components/StepsSection.jsx";
import DoctorSection from "./components/DoctorSection.jsx";
import TestimonialsSection from "./components/TestimonialsSection.jsx";
import FaqSection from "./components/FaqSection.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <main>
      <HeroSection />
      <Result />
      <WhyWhistleSection />
      <WhistleDifferenceSection />
      <CompareSection />
      <StepsSection />
      <DoctorSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </main>
  );
}
