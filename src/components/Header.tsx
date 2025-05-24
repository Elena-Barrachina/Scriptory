import { useUIStore } from '@/stores/uiStore';
import { navItems } from '@/constants/navItems';

export function Header() {
  const { section, setSection } = useUIStore();

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-md">
      <nav className="flex space-x-4 items-center">
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
      </nav>
    </header>
  );
}