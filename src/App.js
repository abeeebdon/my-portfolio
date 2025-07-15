import { useState } from "react";

import Header from "./Header";
import Home from "./Home";
import Skills from "./Skills";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import About from "./About";
import PPage from "./Projects";
import Experience from "./Experience";

function App() {
  const [sideBar, setSideBar] = useState(false);

  const handleClick = () => {
    setSideBar(!sideBar);
  };
  return (
    <main className="">
      {sideBar && <Sidebar handleClick={handleClick} setSideBar={setSideBar} />}

      <Header handleClick={handleClick} sideBar={sideBar} />
      <Home />
      <About />
      {/* <Experience /> */}
      <Skills />
      <PPage />
      <Experience />
      <Footer />
    </main>
  );
}

export default App;
