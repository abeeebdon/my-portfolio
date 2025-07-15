import { useEffect, useState } from "react";

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
  const [theme, setTheme] = useState(() => {
    const userTheme = localStorage.getItem("theme");
    if (userTheme) {
      return userTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });
  const handleClick = () => {
    setSideBar(!sideBar);
  };
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);
  // Handle header shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (window.scrollY > 50) {
        header.classList.add(
          "bg-white/80",
          "dark:bg-gray-800/80",
          "backdrop-blur-sm",
          "shadow-md"
        );
      } else {
        header.classList.remove(
          "bg-white/80",
          "dark:bg-gray-800/80",
          "backdrop-blur-sm",
          "shadow-md"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main>
      {sideBar && <Sidebar handleClick={handleClick} setSideBar={setSideBar} />}

      <Header
        handleClick={handleClick}
        sideBar={sideBar}
        setTheme={toggleTheme}
      />
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
