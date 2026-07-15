import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
    persist(
        (set, get) => ({
            user: null,
            accessToken: null,

            setUser: (user) => set({ user }),
            setAccessToken: (accessToken) => set({ accessToken }),

            clearUser: () => set({ user: null }),

            isLoggedIn: () => !!get().user,
        }),
        {
            name: "auth-storage",
        }
    )
);

export default useAuthStore;