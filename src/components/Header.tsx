import { useState } from 'react';
import { useUIStore } from '@/stores/uiStore';
import { navItems } from '@/constants/navItems';

export function Header() {
  const { section, setSection } = useUIStore();
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  }

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-md">
      <div className="flex items-center space-x-6">
        <span className="text-xl font-bold">Scriptory</span>
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setSection(item.id as any)}
            className={`text-sm font-medium transition-colors duration-1000 border-b-2 ${section === item.id
                ? 'border-teal-500 text-teal-500'
                : 'border-transparent hover:border-zinc-400 dark:hover:border-zinc-500'
              }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <button
        onClick={darkModeHandler}
        aria-label="Toggle theme"
        className={`ml-4 p-2 rounded-full transition-colors duration-1000 ${dark ? 'bg-zinc-100 text-zinc-900' : 'bg-zinc-900 text-zinc-100'
          }`}
      >
        {!dark ? (
          <span className="text-yellow-400">☀️</span>
        ) : (
          <span className="text-gray-200">🌙</span>
        )}
      </button>
    </header>
  );
}
