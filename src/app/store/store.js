import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist((set) => ({
    email: "",
    password: "",

    setEmail: (email) => set({ email }),
    setPassword: (password) => set({ password }),

    signIn: () =>
      set((state) => ({
        isLogin: state.email !== "" && state.password !== "",
      })),

    logout: () =>
      set({
        email: "",
        password: "",
        isLogin: false,
      }),
  })),
);
