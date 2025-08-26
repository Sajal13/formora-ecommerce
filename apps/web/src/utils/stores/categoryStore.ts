import { create } from "zustand";

interface CategoryFilter {
  showFilter: boolean;
  sortBy: string;
  toggleFilter: () => void;
  setSortBy: (val: string) => void;
  selectedFilters: Record<string, string[]>;
  setSelectedFilters: (filters: Record<string, string[]>) => void;
  setShowFilter: (val: boolean) => void;
}

export const useCategoryFilterStore = create<CategoryFilter>((set) => ({
  showFilter: false,
  sortBy: "default",
  toggleFilter: () => set((state) => ({ showFilter: !state.showFilter })),
  setSortBy: (val) => set({ sortBy: val }),
  selectedFilters: {},
  setSelectedFilters: (filters) => set({ selectedFilters: filters }),
  setShowFilter: (val) => set({ showFilter: val })
}));
