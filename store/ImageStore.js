import { create } from "zustand";

export const useImageStore = create((set) => ({
  keyword: "",
  setKeyword: (keyword) => set({ keyword }),
}));
