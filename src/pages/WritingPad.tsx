import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Sidebar } from '@/components/Sidebar';

type Writing = {
  id: string;
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number;
};

const LOCAL_STORAGE_KEY = 'scriptory_writings';

function loadWritings(): Writing[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveWritings(writings: Writing[]) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(writings));
}

export function WritingPad() {
  const [writings, setWritings] = useState<Writing[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const data = loadWritings();
    if (data.length > 0) {
      setWritings(data);
      setActiveId(data[0].id);
    } else {
      const newDoc = createNewWriting();
      setWritings([newDoc]);
      setActiveId(newDoc.id);
    }
  }, []);

  const active = writings.find(w => w.id === activeId);

  const updateActive = (fields: Partial<Writing>) => {
    if (!active) return;
    const updated = { ...active, ...fields, updatedAt: Date.now() };
    const updatedWritings = writings.map(w => (w.id === active.id ? updated : w));

    setWritings(updatedWritings);
    saveWritings(updatedWritings);
  };

  const createNewWriting = (): Writing => ({
    id: uuidv4(),
    title: 'Sense títol',
    content: '',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  });

  const handleNew = () => {
    const newDoc = createNewWriting();
    const updated = [newDoc, ...writings];

    setWritings(updated);
    setActiveId(newDoc.id);
    saveWritings(updated);
  };

  return (
    <div className="flex h-[calc(100vh-64px)]">
      <Sidebar
        writings={writings}
        activeId={activeId}
        onSelect={setActiveId}
        onNew={handleNew}
        open={sidebarOpen}
        toggle={() => setSidebarOpen(prev => !prev)}
      />

      <div className="flex-1 flex flex-col px-6 py-4 overflow-auto bg-transparent">
        {active && (
          <>
            <input
              value={active.title}
              onChange={(e) => updateActive({ title: e.target.value })}
              placeholder="Títol"
              className="text-3xl font-bold mb-4 bg-transparent outline-none text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500"
            />
            <textarea
              value={active.content}
              onChange={(e) => updateActive({ content: e.target.value })}
              placeholder="Comença a escriure..."
              className="w-full h-full resize-none bg-transparent outline-none text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600"
            />
          </>
        )}
      </div>
    </div>
  );
}