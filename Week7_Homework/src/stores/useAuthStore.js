import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
    persist(
        (set, get) => ({
            user: null,
            accessToken: null,

            setUser: (user) => set({ user }),

            setAccessToken: (token) => set({ accessToken: token }),


            login: (user, accessToken) => set({ user, accessToken }),

            clearAuth: () => set({ user: null, accessToken: null }),

            isLoggedIn: () => !!get().accessToken,
        }),
        {
            name: "auth-storage",
        }
    )
);

export default useAuthStore;