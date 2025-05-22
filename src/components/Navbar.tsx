import { useUIStore } from '@/stores/uiStore';
import { navItems } from '@/constants/navItems';

export function Navbar() {
  const { section, setSection } = useUIStore();

  return (
    <nav className="flex space-x-4 bg-zinc-100 dark:bg-zinc-900 px-6 py-3 shadow-md text-zinc-900 dark:text-zinc-100">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-white">
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
      </div>
    </nav>
  );
}
