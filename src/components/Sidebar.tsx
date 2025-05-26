import React from 'react';

type Writing = {
  id: string;
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number;
};

type SidebarProps = {
  writings: Writing[];
  activeId: string;
  onSelect: (id: string) => void;
  onNew: () => void;
  open: boolean;
  toggle: () => void;
};

export function Sidebar({ writings, activeId, onSelect, onNew, open, toggle }: SidebarProps) {
  return (
    <div
      className={`relative z-10 overflow-visible transition-all duration-700
        bg-zinc-100 dark:bg-zinc-800 shadow-2xl
        ${open ? 'w-1/5 p-4' : 'w-1/40 p-0'}`}
    >
      <button
        onClick={toggle}
        aria-label={open ? 'Fold sidebar' : 'Unfold sidebar'}
        className={`
          absolute top-1/2 -right-4 transform -translate-y-1/2
          w-7 h-15 rounded-2xl flex items-center justify-center
          bg-zinc-100 dark:bg-zinc-800 shadow-2xl
          text-2xl font-bold transition-all duration-700
          hover:bg-zinc-200 dark:hover:bg-zinc-700
          text-zinc-900 dark:text-zinc-100
          z-20
        `}
      >
        {open ? '￩' : '￫'}
      </button>

      {open && (
        <div className="space-y-4">
          <button
            onClick={onNew}
            className="w-full bg-teal-500 hover:bg-teal-600 text-white py-1 px-2 rounded"
          >
            + Nou
          </button>
          <ul className="space-y-2 text-sm">
            {writings.map(w => (
              <li
                key={w.id}
                onClick={() => onSelect(w.id)}
                className={`cursor-pointer truncate px-2 py-1 rounded ${
                  w.id === activeId
                    ? 'bg-teal-500 text-white'
                    : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                }`}
              >
                {w.title || 'Sense títol'}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}