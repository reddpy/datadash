import { create } from 'zustand';

export const useRouterActiveStore = create(() => ({
  activeLink: "/",
}));
