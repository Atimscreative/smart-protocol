import About from "@/components/About";
import Community from "@/components/Community";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Roadmap from "@/components/Roadmap";
import Tokenomics from "@/components/Tokenomics";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Roadmap />
      <Tokenomics />
      <Community />
    </>
  );
};

export default Home;
