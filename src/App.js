import { useState } from "react";

import Header from "./Header";
import Home from "./Home";
import Skills from "./Skills";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import About from "./About";
import PPage from "./Projects";

function App() {
  const [sideBar, setSideBar] = useState(false);

  const handleClick = () => {
    setSideBar(!sideBar);
  };
  return (
    <main className="bg-portfolio-tc text-portfolio-bg">
      {sideBar && <Sidebar handleClick={handleClick} setSideBar={setSideBar} />}
      <div
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        className=" bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-black/20" aria-hidden="true"></div>
        <Header handleClick={handleClick} sideBar={sideBar} />
        <Home />
      </div>
      <About />
      {/* <Experience /> */}
      <Skills />
      <PPage />
      <Footer />
    </main>
  );
}

export default App;
