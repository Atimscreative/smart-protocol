import { Button } from "./ui/button";
import feature1 from "@/assets/feature-1.png";
import feature2 from "@/assets/feature-2.png";
import feature3 from "@/assets/feature-3.png";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <>
      <section className="h-screen w-full">
        <Glow className={""} />
        <div className="wrapper">
          <h1 className="">
            Revolutionize your Financial Freedom with Blockchain Technology
          </h1>
          <p className="">
            A next-generation platform built on blockchain to give you full
            control, transparency and security over your financial assets.
          </p>
          <div className="grid">
            <Button className="bg-white text-smarty-200">
              Start your Journey
            </Button>
            <Button className="border-2 border-white bg-transparent">
              Learn how it works
            </Button>
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper">
          <h2>About Us</h2>

          <div className="">
            <div>
              <div>
                <h3></h3>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrapper"></div>
      </section>

      <section>
        <div className="wrapper"></div>
      </section>

      <section>
        <div className="wrapper"></div>
      </section>
    </>
  );
};

const Glow = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(
        "h-[200px] w-[200px] rounded-full bg-smarty-200/70 blur-2xl",
        className,
      )}
    />
  );
};

export default Hero;

const aboutUs = [
  {
    title: "Overview",
    content:
      "Our Platform is designed for those who believe in a decentralized future. By combining advanced blockchain technology with user-friendly design, we're enabling individuals to manage their digital assets without intermediaries.",
  },
  {
    title: "Why it Matters",
    content:
      "In traditional finance, the control of your assets often lies with centralized authorities. Our project empowers you to fully own and manage your assets, protected by the blockchain's transparency and security. Whether it's decentralized finance, NFTs or data ownership, we are here to make blockchain accessible  and impactful.",
  },
];

const features = [
  {
    title: "Decentralized Wallet",
    content:
      "Securely store, send and receive assets with our decentralized wallet. \n \n No intermediaries, just complete control over your digital wealth.",
    photo: feature1,
  },

  {
    title: "Governance by the community",
    content:
      "Power to the people. Stakeholders participate in decisions, shaping the future of the platform through decentralized governance.",
    photo: feature2,
  },
  {
    title: "Transparent Rewards",
    content:
      "Earn through staking, participating and contributing to the ecosystem. \n \n Transparent rewards keeps the community involved and incentivized.",
    photo: feature3,
  },
];

const roadmap = [
  {
    title: "Q1 2025: Platform Launch & Initial Token Sale",
    content:
      "Our initial release allows early adopters to experience the core features of the platform, with a limited token sale to raise funds and build our community.",
  },
  {
    title: "Q2 2025: Community Governance & Staking Rewards.",
    content:
      "Launch of the governance model where token holders can participate in voting and earn rewards.",
  },
  {
    title: "Q3 2025: Expansion of DeFi Tools and Partnerships.",
    content:
      "Introduction of advanced DeFi features and partnerships with other decentralized protocols to expand the ecosystem.",
  },
];
