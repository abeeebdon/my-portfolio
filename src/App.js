import React, { useState } from "react";

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
      <Header handleClick={handleClick} sideBar={sideBar} />
      {sideBar && <Sidebar handleClick={handleClick} setSideBar={setSideBar} />}
      <Home />
      <About />
      {/* <Experience /> */}
      <Skills />
      <PPage />
      <Footer />
    </main>
  );
}

export default App;
