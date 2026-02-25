import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useOrderStore = create(
  persist(
    (set) => ({
      createOrder: "",
      orderList: [],

      setCreateOrder: (value) => set({ createOrder: value }),

      addOrder: (textOrder, typeOrder) =>
        set((state) => {
          if (!state.createOrder.trim()) return {};
          return {
            orderList: [
              { text: textOrder, type: typeOrder, completed: false },
              ...state.orderList,
            ],
            createOrder: "",
          };
        }),

      toggleOrder: (id) =>
        set((state) => ({
          orderList: state.orderList.map((order) =>
            order.id === id ? { ...order, completed: !order.completed } : order,
          ),
        })),

      removeOrder: (index) =>
        set((state) => ({
          orderList: state.orderList.filter((_, i) => i !== index),
        })),

      clearOrder: () => set({ orderList: [] }),

      clearInput: () => set({ createOrder: "" }),
    }),

    {
      name: "order-list",
    },
  ),
);
