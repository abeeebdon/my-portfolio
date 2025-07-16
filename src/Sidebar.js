import { FaTimes } from "react-icons/fa";
import { buttons } from "./Data";

const Sidebar = ({ setSideBar, setTheme, theme }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    // Close sidebar after clicking a link
    setSideBar(false);
  };

  return (
    <aside className="fixed top-0 right-0 w-4/5 max-w-[300px] h-screen z-[9999] bg-gray-600 md:hidden">
      <div className="pt-8 p-6 flex items-center justify-between">
        <FaTimes
          className="text-3xl pt-1 cursor-pointer inline-block"
          onClick={() => setSideBar(false)}
        />
        {/* <button
          id="theme-toggle"
          title="Toggle Dark Mode"
          onClick={setTheme}
          aria-label="Toggle Theme"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
        >
          <FaMoon />
        </button> */}
      </div>
      <div className="flex flex-col mt-8 gap-6 p-8 pl-12">
        {buttons.map((button) => (
          <button
            key={button.id}
            onClick={() => scrollToSection(button.id)}
            className="text-white text-3xl text-center hover:text-yellow-400"
          >
            {button.text}
          </button>
        ))}
      </div>
    </aside>
  );
};
export default Sidebar;
