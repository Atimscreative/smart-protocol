import EachElement from "./EachElement";
import icon from "@/assets/timeline.svg";
import Glow from "./Glow";

const Roadmap = () => {
  return (
    <>
      <section className="relative py-16">
        <Glow className="absolute -left-20 top-0 h-[400px] w-[400px] scale-125 opacity-85" />
        <div className="wrapper">
          <h2 className="mb-16 text-center text-4xl font-medium">
            Roadmap/Timeline
          </h2>
          <div className="mx-auto grid max-w-2xl gap-8 lg:max-w-full lg:grid-cols-2 lg:items-center">
            <div className="grid gap-8">
              <EachElement
                of={roadmap}
                render={(item: IRoadmap, index: number) => {
                  return (
                    <div key={index}>
                      <div className="text-balance rounded-[1rem] border-[3px] border-white bg-gradient-to-r from-smarty-200 to-smarty-100 p-4 text-center">
                        {item.title}
                      </div>
                      <p className="mt-8">{item.content}</p>
                    </div>
                  );
                }}
              />
            </div>

            <img
              src={icon}
              alt="illustration"
              className="mx-auto block w-3/4"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;

type IRoadmap = {
  title: string;
  content: string;
};

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
