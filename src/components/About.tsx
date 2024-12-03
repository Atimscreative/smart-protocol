import EachElement from "./EachElement";

const About = () => {
  return (
    <>
      <section className="py-16">
        <div className="wrapper">
          <h2 className="mb-16 text-center text-4xl font-medium md:text-3xl lg:text-4xl">
            About Us
          </h2>

          <div className="">
            <div className="grid gap-8 md:grid-cols-2">
              <EachElement
                of={aboutUs}
                render={(item: IAbout, index: number) => {
                  return (
                    <div
                      key={index}
                      className="rounded-[1rem] bg-gradient-to-b from-white/85 via-transparent via-75% to-transparent p-0.5"
                    >
                      <div className="rounded-[14px] bg-smarty-400 p-6 pb-10 lg:p-20">
                        <h3 className="mb-4 text-2xl font-medium">
                          {item.title}
                        </h3>
                        <p className="leading-[1.5]">{item.content}</p>
                      </div>
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

export default About;

type IAbout = {
  title: string;
  content: string;
};

const aboutUs: IAbout[] = [
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
