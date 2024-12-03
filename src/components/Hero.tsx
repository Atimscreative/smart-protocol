import { ArrowRight } from "iconsax-react";
import { Button } from "./ui/button";
import Glow from "./Glow";

const Hero = () => {
  return (
    <>
      <section className="relative w-full pt-28 lg:flex lg:h-screen lg:items-center lg:justify-center lg:pt-0">
        {/* GLOW EFFECT */}

        <Glow className="absolute -left-16 -top-10 h-[300px] w-[300px] scale-75 lg:scale-150" />
        <Glow className="absolute -bottom-40 -right-16 h-[300px] w-[300px] scale-105 md:-bottom-10 lg:scale-150" />

        {/* HERO CONTENT */}
        <div className="wrapper relative z-10 sm:max-w-2xl md:max-w-xl lg:max-w-4xl">
          <h1 className="text-center text-[40px] font-medium lg:text-6xl lg:leading-tight">
            Revolutionize your Financial Freedom with Blockchain Technology
          </h1>
          <p className="font-lights mt-3 text-center text-base lg:text-balance">
            A next-generation platform built on blockchain to give you full
            control, transparency and security over your financial assets.
          </p>
          <div className="mx-auto mt-16 grid gap-4 sm:flex sm:justify-center">
            <Button className="group h-auto bg-white py-3.5 text-smarty-200 hover:bg-white hover:shadow hover:shadow-smarty-400">
              Start your Journey
              <span className="w-0 -translate-x-3 text-smarty-200 opacity-0 duration-300 group-hover:w-5 group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowRight />
              </span>
            </Button>
            <Button className="group h-auto border-2 border-white bg-transparent py-3.5 hover:bg-transparent">
              Learn how it works
              <span className="w-0 -translate-x-3 text-white opacity-0 duration-300 group-hover:w-5 group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowRight />
              </span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
