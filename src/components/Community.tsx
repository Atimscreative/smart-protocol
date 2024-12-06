import { ArrowRight } from "iconsax-react";
import { Button } from "./ui/button";

const Community = () => {
  return (
    <>
      <section className="py-16">
        <div className="wrapper">
          <h2 className="mb-16 text-balance text-center text-4xl font-medium">
            Community and Ecosystem
          </h2>

          <div className="relative flex flex-col items-center overflow-hidden rounded-[1rem] bg-gradient-to-b from-smarty-100 to-smarty-200 p-6 py-16">
            <p className="mb-10 max-w-4xl text-center md:text-balance md:text-2xl md:leading-normal">
              Join a thriving community of like-minded individuals committed to
              decentralization. Engage in discussions, participate in governance
              and help shape the future of the platform.
            </p>

            <Button className="group h-auto items-center bg-white px-5 py-3.5 text-smarty-200 shadow-2xl shadow-white/30 duration-300 hover:bg-white hover:shadow hover:shadow-smarty-400">
              Join the community
              <span className="w-0 -translate-x-3 text-smarty-200 opacity-0 duration-300 group-hover:w-5 group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowRight />
              </span>
            </Button>

            {/*  */}
            <div className="absolute -bottom-24 -left-24 h-52 w-52 rounded-full border-[10px] border-[#FFFFFF] mix-blend-soft-light" />
            <div className="absolute -bottom-24 -right-24 h-52 w-52 rounded-full border-[10px] border-[#FFFFFF] mix-blend-soft-light" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Community;
