'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'phosphor-react';
import Link from 'next/link';

type UseDarkModeReturn = readonly [boolean, () => void];

function useDarkMode(): UseDarkModeReturn {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    localStorage.setItem('darkMode', (!isDarkMode).toString());
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return [isDarkMode, toggleDarkMode] as const;
}

export default function Header() {
  const [isDarkMode, toggleDarkMode]: UseDarkModeReturn = useDarkMode();

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="hover:bg-primary-dark fixed top-0 z-10 flex w-full items-center justify-between bg-primary p-4 text-primary-foreground shadow-lg transition-colors duration-300 ease-in-out dark:bg-secondary dark:text-secondary-foreground">
      <div className="flex-grow"></div>
      <nav className="flex space-x-4">
        <button
          onClick={() => handleScrollToSection('home')}
          className="cursor-pointer text-lg"
        >
          Home
        </button>

        <button
          onClick={() => handleScrollToSection('experience')}
          className="cursor-pointer text-lg"
        >
          Experiencia
        </button>
        <button
          onClick={() => handleScrollToSection('contact')}
          className="cursor-pointer text-lg"
        >
          Contato
        </button>
      </nav>
      <div className="flex flex-grow justify-end">
        <button
          onClick={toggleDarkMode}
          className="ml-4 rounded-full bg-primary p-2 text-primary-foreground transition-colors dark:bg-secondary dark:text-secondary-foreground"
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
        </button>
      </div>
    </header>
  );
}
