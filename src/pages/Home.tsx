import About from "@/components/About";
import Community from "@/components/Community";
import Faqs from "@/components/Faqs";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Roadmap from "@/components/Roadmap";
import Tokenomics from "@/components/Tokenomics";

const Home = () => {
  return (
    <main className="contain-paint">
      <Hero />
      <About />
      <Features />
      <Roadmap />
      <Tokenomics />
      <Community />
      <Faqs />
    </main>
  );
};

export default Home;
