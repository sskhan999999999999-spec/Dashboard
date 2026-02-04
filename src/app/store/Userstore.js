import { create } from "zustand";
import { persist } from "zustand/middleware";

const UserStore = create(
  persist(
    (set) => ({
      user: null,
      hydrated: false,
      hasAccount:false,

      login: (data) => set({ user: data }),
      signup: (data) => set({ user: {...data} }),
      logout: () => set({ user: null }
           
      ),

      setHydrated: () => set({ hydrated: true }),
    }),
    {
      name: "user-store",
      onRehydrateStorage: () => (state) => {
        state.setHydrated();
      },
    }
  )
);

export default UserStore;
