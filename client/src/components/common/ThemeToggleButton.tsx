import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLight } from "react-icons/md";

function ThemeToggleButton() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div
      onClick={() => setDarkMode((prev) => !prev)}
      className="cursor-pointer text-gray-800 dark:text-white"
      aria-label="Toggle theme"
      role="button"
    >
      {darkMode ? (
        <MdOutlineLight size={20} />
      ) : (
        <MdOutlineDarkMode size={20} />
      )}
    </div>
  );
}

export default ThemeToggleButton;
