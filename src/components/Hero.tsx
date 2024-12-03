import { ArrowRight } from "iconsax-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <>
      <section className="w-full pt-16">
        <Glow className="absolute -left-16 -top-10 h-[300px] w-[300px]" />
        <div className="wrapper relative z-10">
          <h1 className="text-center text-[40px] font-medium">
            Revolutionize your Financial Freedom with Blockchain Technology
          </h1>
          <p className="font-lights mt-3 text-center text-base">
            A next-generation platform built on blockchain to give you full
            control, transparency and security over your financial assets.
          </p>
          <div className="mt-16 grid gap-4">
            <Button className="group h-auto bg-white py-3.5 text-smarty-200 hover:bg-white hover:shadow hover:shadow-smarty-400">
              Start your Journey
              <span className="-translate-x-3 text-smarty-200 opacity-0 duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowRight />
              </span>
            </Button>
            <Button className="group h-auto border-2 border-white bg-transparent py-3.5 hover:bg-transparent">
              Learn how it works
              <span className="-translate-x-3 text-white opacity-0 duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowRight />
              </span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

const Glow = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(
        "z-0 h-[200px] w-[200px] rounded-full bg-smarty-200/70 blur-3xl",
        className,
      )}
    />
  );
};

export default Hero;
