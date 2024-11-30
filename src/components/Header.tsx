// import React from "react";
import { Button } from "./ui/button";
import Logo from "@/assets/Logo.svg";

const Header = () => {
  return (
    <>
      <header className="">
        <nav className="wrapper">
          <a href="/">
            <img src={Logo} alt="Smart Protocol" />
          </a>
          <div>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">How it works</a>
            <a href="">Docs</a>
          </div>

          <Button>Login</Button>
        </nav>
      </header>
    </>
  );
};

export default Header;
