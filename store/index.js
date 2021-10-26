import create from "zustand";

export const languageProvider = create((set) => ({
  lang: "en",
  setLang: (lang) => set((state) => ({ lang })),
}));
