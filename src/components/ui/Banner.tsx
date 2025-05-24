import React, { useState, useEffect } from 'react';
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
  const handleClick = () => {
    onNavigate(lastSection ?? 'write');
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer rounded-md px-5 py-3 flex items-center justify-between select-none transition-colors duration-300`}
      role="button"
      aria-label="Navigate to last visited section or start writing"
    >
      <div
        onClick={handleClick}
        className="cursor-pointer bg-gradient-to-r from-teal-400 to-blue-500 text-white px-6 py-4 rounded-md shadow-md hover:from-teal-500 hover:to-blue-600 transition-colors select-none"
      >
        {lastSection
          ? `Tornar a l'última secció: ${lastSection}`
          : 'Començar a crear'}
      </div>
    </div>
  );
}
