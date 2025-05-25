import { Header } from './Header';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 dark:bg-zinc-900 text-zinc-100">
      <Header />
      <main>{children}</main>
    </div>
  );
}
