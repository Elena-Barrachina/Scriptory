import { navItems } from '@/constants/navItems';

type BannerProps = {
  lastSection: string | null;
  onNavigate: (section: string) => void;
};

const labelMap: Record<string, string> = {};
navItems.forEach(({ id, label }) => {
  labelMap[id] = label;
});

export function Banner({ lastSection, onNavigate }: BannerProps) {
  const label = lastSection && labelMap[lastSection];

  const target = lastSection && label ? lastSection : 'write';
  const prompt = lastSection && label ? `Tornar a l'última secció: ${label}` : 'Comença a escriure!';

  return (
    <div
      onClick={() => onNavigate(target)}
      className="cursor-pointer bg-gradient-to-r from-teal-500 to-#533747
        text-zinc-900 dark:text-zinc-100 px-6 py-20 rounded-md shadow-md
        hover:from-teal-900 hover:to-teal-500 transition-colors
        m-6 text-center text-3xl font-medium"
      role="button"
      aria-label="Navigate to last visited section or start writing"
    >
      {prompt}
    </div>
  );
}