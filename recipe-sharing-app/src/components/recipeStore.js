import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  // State
  recipes: [],
  
  // Action: Add a new recipe
  addRecipe: (newRecipe) => set((state) => ({ 
    recipes: [...state.recipes, newRecipe] 
  })),
  
  // Action: Set all recipes
  setRecipes: (recipes) => set({ recipes }),
  
  // Action: Delete a recipe
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),
  
  // Action: Update a recipe
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  }))
}));

export default useRecipeStore;