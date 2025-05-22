import React from 'react';
import { useUIStore } from '../stores/uiStore';

export default function App() {
  const { theme, setTheme } = useUIStore();

  return (
    <div className={`min-h-screen p-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <header className="mb-6 flex justify-between items-center">
        <h1 className="text-4xl font-bold">Scriptory</h1>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="px-4 py-2 rounded bg-#533747 text-white"
        >
          Toggle Theme
        </button>
      </header>

      <main>
        <p>Benvinguts a Scriptory — la caixa d'eines pensada per a escriptors.</p>
        {/* Future features will be added here */}
      </main>
    </div>
  );
}