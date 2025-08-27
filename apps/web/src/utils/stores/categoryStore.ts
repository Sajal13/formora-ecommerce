import { create } from "zustand";

interface CategoryFilter {
  showFilter: boolean;
  sortBy: string;
  totalItems: number;
  maxPrice: number;
  toggleFilter: () => void;
  setSortBy: (val: string) => void;
  selectedFilters: Record<string, string[]>;
  setSelectedFilters: (filters: Record<string, string[]>) => void;
  setShowFilter: (val: boolean) => void;
  setTotalItems: (val: number) => void;
  setMaxPrice: (val: number) => void;
}

export const useCategoryFilterStore = create<CategoryFilter>((set) => ({
  showFilter: false,
  sortBy: "default",
  totalItems: 0,
  maxPrice: 10000,
  toggleFilter: () => set((state) => ({ showFilter: !state.showFilter })),
  setSortBy: (val) => set({ sortBy: val }),
  selectedFilters: {},
  setSelectedFilters: (filters) => set({ selectedFilters: filters }),
  setShowFilter: (val) => set({ showFilter: val }),
  setTotalItems: (val) => set({ totalItems: val }),
  setMaxPrice: (val) => set({ maxPrice: val })
}));
