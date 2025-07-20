import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MainStore {
  restaurant: RestaurantType[];
  setRestaurant: (restaurant: RestaurantType[]) => void;

  media: MediaType[];
  setMedia: (media: MediaType[]) => void;

  type: string | null;
  setType: (type: string) => void;
}

// persist로 새로고침 시 복원.
export const useMainStore = create<MainStore>()(
  persist(
    (set) => ({
      restaurant: [],
      setRestaurant: (restaurant) => set({ restaurant }),

      media: [],
      setMedia: (media) => set({ media }),

      type: null,
      setType: (type) => set({ type }),
    }),
    {
      name: "main-store",
    }
  )
);
