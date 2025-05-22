import { GlassCard } from '../components/ui/GlassCard';
import { useUIStore } from '@/stores/uiStore';

export function Home() {
  const { setSection } = useUIStore();

  return (
    <div className="relative flex justify-center items-center min-h-[80vh] px-4 overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600 opacity-20 blur-[160px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-400 opacity-20 blur-[120px] rounded-full -z-10 animate-pulse" />
      <GlassCard>
        <h1 className="text-3xl font-bold mb-3 text-white">Scriptory</h1>
          <p className="text-sm text-zinc-200 mb-6 text-center">
            La caixa d'eines per a escriptors.
          </p>
      </GlassCard>
    </div>
  );
}