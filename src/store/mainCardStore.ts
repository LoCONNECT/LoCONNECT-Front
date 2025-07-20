import { create } from "zustand";

interface MainStore {
  restaurant: RestaurantType[];
  setRestaurant: (restaurant: RestaurantType[]) => void;

  media: MediaType[];
  setMedia: (media: MediaType[]) => void;

  type: string | null;
  setType: (type: string) => void;
}

export const useMainStore = create<MainStore>((set) => ({
  restaurant: [],
  setRestaurant: (restaurant) => set({ restaurant }),

  media: [],
  setMedia: (media) => set({ media }),

  type: null,
  setType: (type) => set({ type }),
}));
