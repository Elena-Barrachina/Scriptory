import { Navbar } from './Navbar';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-950 to-black text-white">
      <Navbar />
      <main className="flex-grow px-4 py-8">
        {children}
      </main>
    </div>
  );
}
