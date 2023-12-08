import AppBar from "../components/appBar";
import Contact from "../components/contac/Index";
import FeedBacks from "../components/feedback/Index";
import FooterComponent from "../components/footer/Index";
import HeroSection from "../components/hero/Index";
import Projects from "../components/projects/Index";
import Specialities from "../components/specialitie/Index";

const Home = () => {
  return (
    <>
      <AppBar />
      <main>
        <HeroSection />
        <Specialities />
        <Projects />
        <FeedBacks />
        <Contact />
      </main>
      <FooterComponent />
    </>
  );
};

export default Home;
