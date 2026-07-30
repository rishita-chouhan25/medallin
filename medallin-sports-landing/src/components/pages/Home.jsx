import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Story from "../Story/Story";
import Stats from "../Stats/Stats";
import Programs from "../Programs/Programs";
import CallToAction from "../cta/CallToAction";
import Footer from "../footer/Footer";
import CTASection from "../ctalast/CTASection";
import VideoSection from "../video-section/VideoSection";
// import Facilities from "../components/Facilities/Facilities";
// import CTA from "../components/CTA/CTA";
// import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <VideoSection />
      <Stats />
      <CallToAction />
      <Programs />
      <CTASection />
      <Footer /> 
      {/* <Facilities />
      
      */}
    </>
  );
};

export default Home;