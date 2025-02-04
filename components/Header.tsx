"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Moon, Sun } from "phosphor-react";

type UseDarkModeReturn = readonly [boolean, () => void];

function useDarkMode(): UseDarkModeReturn {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    localStorage.setItem("darkMode", (!isDarkMode).toString());
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return [isDarkMode, toggleDarkMode] as const;
}

export default function Header() {
  const [isDarkMode, toggleDarkMode]: UseDarkModeReturn = useDarkMode();

  return (
    <header className="flex items-center justify-between p-4 bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground w-full">
      <div className="flex-grow"></div>
      <nav className="flex space-x-4">
        <Link href="/" className="text-lg">
          Home
        </Link>
        <Link href="/projects" className="text-lg">
          Projects
        </Link>
        <Link href="/experience" className="text-lg">
          Experience
        </Link>
        <Link href="/contact" className="text-lg">
          Contact
        </Link>
      </nav>
      <div className="flex-grow flex justify-end">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-primary dark:bg-secondary text-primary-foreground dark:text-secondary-foreground transition-colors ml-4"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>
    </header>
  );
}
