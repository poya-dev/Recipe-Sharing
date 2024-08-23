import { create } from 'zustand';

import { recipeService } from '../services/api';

const useRecipeStore = create((set) => ({
  recipes: [],
  currentRecipe: null,
  loading: false,
  error: null,

  fetchAllRecipes: async () => {
    set({ loading: true });
    try {
      const response = await recipeService.getAllRecipes();
      set({ recipes: response.data, loading: false, error: null });
    } catch (error) {
      set({ error: 'Failed to fetch recipes', loading: false });
    }
  },

  fetchRecipe: async (id) => {
    set({ loading: true });
    try {
      const response = await recipeService.getRecipeById(id);
      set({ currentRecipe: response.data, loading: false, error: null });
    } catch (error) {
      set({ error: 'Failed to fetch recipe', loading: false });
    }
  },
}));

export default useRecipeStore;
