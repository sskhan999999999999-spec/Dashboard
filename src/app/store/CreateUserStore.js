import { create } from "zustand";
import { persist } from "zustand/middleware";

export const createUserStore = create(
  persist(
    (set, get) => ({
      users: [],
      currentUser: null,

      login: (email) => {
        const user = get().users.find(u => u.email === email);
        if (user) set({ currentUser: user });
      },

      addUser: (user,role) => {
        set({ users: [...get().users, user,role] });
      },

      logout: () => set({ currentUser: null }),
    }),
    {
      name: "auth-storage",
    }
  )
);
