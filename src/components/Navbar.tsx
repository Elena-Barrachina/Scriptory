import { useState, useEffect } from 'react';
import { useUIStore } from '@/stores/uiStore';
import { navItems } from '@/constants/navItems';

export function Navbar() {
  const { section, setSection } = useUIStore();
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('DarkMode');
    if (saved !== null) setDarkMode(saved === 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem('DarkMode', darkMode.toString());
  }, [darkMode]);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDarkMode(!darkMode);
  };

  const icon = darkMode ? '☀️' : '🌙';

  return (
    <nav className="flex space-x-4
      bg-zinc-100 dark:bg-zinc-900 px-6 py-3 shadow-md
      text-zinc-900 dark:text-zinc-100"
    >
      <h1 className="text-lg font-semibold tracking-tight
        text-zinc-800 dark:text-white"
      >
        Scriptory
      </h1>
      <div className="flex space-x-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setSection(item.id as any)}
            className={`text-sm font-medium transition-colors border-b-2 ${
              section === item.id
                ? 'border-teal-500 text-teal-500'
                : 'border-transparent hover:border-zinc-400 dark:hover:border-zinc-500'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div>
        <button
          onClick={handleToggle}
          className={`ml-4 p-1 rounded-full focus:outline-none
            ${darkMode ? 'bg-white text-zinc-900' : 'bg-zinc-900 text-white'}`}
          aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
        >
          {icon}
        </button>
      </div>
    </nav>
  );
}
