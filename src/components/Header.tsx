import { ArrowRight, HambergerMenu } from "iconsax-react";
import { Button } from "./ui/button";
import Logo from "@/assets/Logo.svg";

const Header = () => {
  return (
    <>
      <header className="absolute left-0 top-0 z-10 w-full py-2.5">
        <nav className="wrapper flex items-center justify-between">
          <a href="/">
            <img src={Logo} className="w-10" alt="Smart Protocol" />
          </a>
          <div className="hidden lg:flex lg:gap-10">
            <a
              href="/"
              className="font-light duration-300 ease-linear hover:translate-y-1 hover:drop-shadow-[-2px_3px_3px_rgba(255,255,255,.7)]"
            >
              Home
            </a>
            <a
              href="#about"
              className="font-light duration-300 ease-linear hover:translate-y-1 hover:drop-shadow-[-2px_3px_3px_rgba(255,255,255,.7)]"
            >
              About
            </a>
            <a
              href=""
              className="font-light duration-300 ease-linear hover:translate-y-1 hover:drop-shadow-[-2px_3px_3px_rgba(255,255,255,.7)]"
            >
              How it works
            </a>
            <a
              href=""
              className="font-light duration-300 ease-linear hover:translate-y-1 hover:drop-shadow-[-2px_3px_3px_rgba(255,255,255,.7)]"
            >
              Docs
            </a>
          </div>

          <Button className="group hidden h-auto items-center justify-center border-2 border-white bg-transparent px-4 py-2 hover:bg-white hover:text-smarty-200 lg:inline-flex">
            Login
            <span className="w-0 -translate-x-3 overflow-hidden text-white opacity-0 duration-300 group-hover:w-5 group-hover:translate-x-0 group-hover:text-smarty-200 group-hover:opacity-100">
              <ArrowRight />
            </span>
          </Button>
          <span
            aria-label="open-mainmenu"
            className="cursor-pointer text-white lg:hidden"
          >
            <HambergerMenu size={32} />
          </span>
        </nav>
      </header>
    </>
  );
};

export default Header;
