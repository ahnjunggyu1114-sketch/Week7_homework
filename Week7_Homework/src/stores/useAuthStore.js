import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
    persist(
        (set, get) => ({
            user: null,

            setUser: (user) => set({ user }),

            clearUser: () => set({ user: null }),

            isLoggedIn: () => !!get().user,
        }),
        {
            name: "auth-storage",
        }
    )
);

export default useAuthStore;