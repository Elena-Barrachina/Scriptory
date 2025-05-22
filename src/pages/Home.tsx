import { useUIStore } from '@/stores/uiStore';
import { navItems } from '@/constants/navItems';

const labelMap: Record<string, string> = {};
navItems.forEach(({ id, label }) => {
  labelMap[id] = label;
});

export function Home() {
  const { lastSection, setSection } = useUIStore();

  const handleClick = () => {
    if (lastSection) {
      setSection(lastSection);
    } else {
      setSection('write');
    }
  };

  return (
    <div className="p-6">
      <div
        onClick={handleClick}
        className="cursor-pointer rounded-md bg-zinc-900 bg-opacity-70 text-zinc-100 px-5 py-3
                  backdrop-blur-md hover:bg-opacity-90 transition duration-300
                  flex items-center justify-center space-x-3 select-none"
        role="button"
        aria-label="Navigate to last visited section or start writing"
      >
        <span className="font-semibold text-lg">
          {lastSection
            ? <>Tornar a <span className="underline">{labelMap[lastSection]}</span></>
            : <>Començar a crear</>}
        </span>
      </div>

      <h1 className="text-2xl font-bold">Scriptory</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mt-2">La caixa d'eines per a escriptors.</p>
    </div>
  );
}