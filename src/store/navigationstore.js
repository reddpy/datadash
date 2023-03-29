import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useRouterActiveStore = create(
  persist(
    () => ({
      activeLink: "/",
    }),
    {
      name: "nav-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
