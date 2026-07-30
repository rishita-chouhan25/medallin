import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Story from "../Story/Story";
import Stats from "../Stats/Stats";
import Programs from "../Programs/Programs";
// import Facilities from "../components/Facilities/Facilities";
// import CTA from "../components/CTA/CTA";
// import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Story />
      <Stats />
      <Programs />
      {/* <Facilities />
      <CTA />
      <Footer /> */}
    </>
  );
};

export default Home;