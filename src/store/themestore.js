import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  theme: "light",
  setDark: () => set({ theme: "dark" }),
  setLight: () => set({ theme: "light" })
}));
