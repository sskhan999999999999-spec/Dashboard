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

     addUser: (user, role) => {
        const newUser = { ...user, role }; 
        set({ users: [...get().users, newUser] });
      },

      logout: () => set({ currentUser: null }),
      clearuser: ()=>{
        set({users:[]})
      }
    }),
    {
      name: "auth-storage",
    }
  )
);
