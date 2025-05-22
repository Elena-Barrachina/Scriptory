import { create } from 'zustand';

export type Section = 'home' | 'write' | 'library' | 'tree' | 'settings';

const LAST_SECTION_KEY = 'lastVisitedSection';

type UIState = {
  section: Section;
  lastSection: Section | null;
  setSection: (section: Section) => void;
};

export const useUIStore = create<UIState>((set, get) => ({
  section: 'home',
  lastSection: localStorage.getItem(LAST_SECTION_KEY) as Section || null,
  setSection: (section) => {
    const current = get().section;
    if (current !== section && current !== 'home') {
      localStorage.setItem(LAST_SECTION_KEY, current);
      set({ lastSection: current });
    }
    set({ section });
  },
}));
