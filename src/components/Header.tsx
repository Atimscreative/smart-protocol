import { HambergerMenu } from "iconsax-react";
import { Button } from "./ui/button";
import Logo from "@/assets/Logo.svg";

const Header = () => {
  return (
    <>
      <header className="relative z-10 py-2.5">
        <nav className="wrapper flex items-center justify-between">
          <a href="/">
            <img src={Logo} className="w-10" alt="Smart Protocol" />
          </a>
          <div className="hidden lg:flex lg:gap-8">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">How it works</a>
            <a href="">Docs</a>
          </div>

          <Button className="hidden lg:inline-block">Login</Button>
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
