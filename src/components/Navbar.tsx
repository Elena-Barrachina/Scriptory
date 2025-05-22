import { useUIStore, Section } from '@/stores/uiStore';

const navItems: { id: Section; label: string }[] = [
  { id: 'home', label: 'Inici' },
  { id: 'write', label: 'Bloc de notes' },
  { id: 'library', label: 'Arxiu' },
  { id: 'tree', label: 'Arbre Genealògic' },
  { id: 'settings', label: 'Configuració' },
];

export function Navbar() {
  const { section, setSection } = useUIStore();

  return (
    <nav className="w-full bg-white dark:bg-zinc-900 shadow-sm border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold tracking-tight text-zinc-800 dark:text-white">
          Scriptory
        </h1>
        <div className="flex space-x-2">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setSection(id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
                ${
                  section === id
                    ? 'bg-teal-500 text-white shadow'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
