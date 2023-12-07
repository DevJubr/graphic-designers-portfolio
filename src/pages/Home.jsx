import AppBar from "../components/appBar";
import FeedBacks from "../components/feedback/Index";
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
      </main>
    </>
  );
};

export default Home;
