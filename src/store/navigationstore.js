import { create } from 'zustand';

export const useRouterActiveStore = create((set) => ({
  activeLink: "/",
}));
