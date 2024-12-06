import EachElement from "./EachElement";
import icon from "@/assets/tokenomics.svg";
import Glow from "./Glow";

const Tokenomics = () => {
  return (
    <>
      <section className="relative py-16">
        <Glow className="absolute -bottom-20 -right-20 h-[500px] w-[500px] opacity-55" />

        <div className="wrapper">
          <h2 className="mb-16 text-center text-4xl font-medium">Tokenomics</h2>
          <div className="mx-auto flex max-w-2xl flex-col-reverse gap-8 lg:grid lg:max-w-full lg:grid-cols-2 lg:items-center">
            <img
              src={icon}
              alt="illustration"
              className="mx-auto block w-3/4"
            />
            <div className="grid gap-8">
              <EachElement
                of={tokenomics}
                render={(item: IToken, index: number) => {
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Tokenomics;

type IToken = {
  title: string;
  content: string;
};

const tokenomics: IToken[] = [
  {
    title: "Token Distribution",
    content:
      "Our tokenomics are designed to ensure sustainable growth and fair distribution, with 40% allocated to community incentives, 25% to development, 15% to liquidity, 10% to partners, and 10% to the team.",
  },
  {
    title: "Benefit of Holding Tokens",
    content:
      "Token holders gain voting rights, access to exclusive platform features and the ability to stake for rewards. Holding Tokens strengthens your role in the ecosystem and unlocks higher level benefits.",
  },
];
