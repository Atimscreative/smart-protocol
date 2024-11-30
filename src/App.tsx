// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      <header className="">
        <nav className="wrapper">
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
}

export default App;
