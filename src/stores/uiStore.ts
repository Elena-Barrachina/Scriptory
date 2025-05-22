import { create } from 'zustand';

export type Section = 'home' | 'write' | 'library' | 'tree' | 'settings';

type UIState = {
  section: Section;
  setSection: (section:Section) => void;
};

export const useUIStore = create<UIState>((set) => ({
  section: 'home',
  setSection: (section) => set({ section }),
}));