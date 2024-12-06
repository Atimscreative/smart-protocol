import Logo from "@/assets/Logo.svg";
import Glow from "./Glow";

const Footer = () => {
  return (
    <footer className="relative py-16">
      <Glow className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 scale-125 opacity-85 lg:h-[500px] lg:w-[500px] lg:scale-110" />

      <div className="wrapper">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 border-y border-white py-16 sm:px-10 md:flex-row lg:px-16">
          <a
            href="/"
            className="mb-4 inline-flex items-center gap-3 font-outfit"
          >
            <img src={Logo} className="w-10" alt="Smart Protocol" />
            <span className="inline-block text-2xl text-white">
              Smart Protocol
            </span>
          </a>

          <div className="flex w-[300px] justify-between gap-8">
            <div className="inline-flex flex-col space-y-6">
              <h3 className="text-2xl">Company</h3>
              <a
                href="/"
                className="duration-300 hover:translate-x-1.5 hover:drop-shadow-[-2px_3px_3px_rgba(255,255,255,.7)]"
              >
                About
              </a>
              <a
                href="/"
                className="duration-300 hover:translate-x-1.5 hover:drop-shadow-[-2px_3px_3px_rgba(255,255,255,.7)]"
              >
                Features
              </a>
              <a
                href="/"
                className="duration-300 hover:translate-x-1.5 hover:drop-shadow-[-2px_3px_3px_rgba(255,255,255,.7)]"
              >
                Roadmap
              </a>
              <a
                href="/"
                className="duration-300 hover:translate-x-1.5 hover:drop-shadow-[-2px_3px_3px_rgba(255,255,255,.7)]"
              >
                Tokenomics
              </a>
              <a
                href="/"
                className="duration-300 hover:translate-x-1.5 hover:drop-shadow-[-2px_3px_3px_rgba(255,255,255,.7)]"
              >
                Community
              </a>
            </div>

            <div className="inline-flex flex-col space-y-6">
              <h3 className="text-2xl">Socials</h3>

              <a
                href="/"
                className="duration-300 hover:translate-x-1.5 hover:drop-shadow-[-2px_3px_3px_rgba(255,255,255,.7)]"
              >
                X (Twitter)
              </a>
              <a
                href="/"
                className="duration-300 hover:translate-x-1.5 hover:drop-shadow-[-2px_3px_3px_rgba(255,255,255,.7)]"
              >
                Telegram
              </a>
              <a
                href="/"
                className="duration-300 hover:translate-x-1.5 hover:drop-shadow-[-2px_3px_3px_rgba(255,255,255,.7)]"
              >
                Instagram
              </a>
              <a
                href="/"
                className="duration-300 hover:translate-x-1.5 hover:drop-shadow-[-2px_3px_3px_rgba(255,255,255,.7)]"
              >
                Reddit
              </a>
              <a
                href="/"
                className="duration-300 hover:translate-x-1.5 hover:drop-shadow-[-2px_3px_3px_rgba(255,255,255,.7)]"
              >
                Linkedln
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-xl">
          @2025 SmartProtocol. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
