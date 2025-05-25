import React from 'react';
import { useUIStore } from '@/stores/uiStore';
import { navItems } from '@/constants/navItems';
import { useNavigate } from 'react-router-dom';

const labelMap: Record<string, string> = {};
navItems.forEach(({ id, label }) => {
  labelMap[id] = label;
});

export function Home() {
  const navigate = useNavigate();
  const { setSection } = useUIStore();

  const lastVisited = localStorage.getItem('lastVisited') || 'write';

  const handleClick = () => {
    setSection(lastVisited as any);
    navigate('/');
  };

  return (
    <div className='p-6'>
      <div className='text-2xl font-bold text-teal-500 dark:text-teal-500'>
        Scriptory
      </div>
      <p className='text-zinc-900 dark:text-zinc-100'>
        La caixa d'eines per als escriptors.
      </p>
    </div>
  );
}