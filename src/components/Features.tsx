import feature1 from "@/assets/feature-1.png";
import feature2 from "@/assets/feature-2.png";
import feature3 from "@/assets/feature-3.png";
import EachElement from "./EachElement";
import Glow from "./Glow";

const Features = () => {
  return (
    <>
      <section className="relative py-16">
        <Glow className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 scale-125 opacity-85 md:top-28 md:translate-y-0 lg:scale-125" />
        <div className="wrapper">
          <h2 className="mb-16 text-center text-4xl font-medium md:text-3xl lg:text-4xl">
            Key Features
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <EachElement
              of={features}
              render={(item: IFeature, index: number) => {
                return (
                  <div
                    key={index}
                    style={{
                      borderImage:
                        "linear-gradient(180deg, #ffffff, transparent) 1",
                    }}
                    className="border-2 p-6 text-center md:p-8"
                  >
                    <img
                      src={item.photo}
                      alt={item.title}
                      className="mx-auto mb-8 h-36 w-36 rounded-full border-2 border-white object-cover object-center"
                    />
                    <h3 className="mb-4 text-2xl font-medium">{item.title}</h3>
                    <p>{item.content}</p>
                  </div>
                );
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

type IFeature = {
  title: string;
  content: string;
  photo: string;
};

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
