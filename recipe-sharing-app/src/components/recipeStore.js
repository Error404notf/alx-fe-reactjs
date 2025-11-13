// import { create } from 'zustand';

// const useRecipeStore = create((set) => ({
//   // State
//   recipes: [],
  
//   // Action: Add a new recipe
//   addRecipe: (newRecipe) => set((state) => ({ 
//     recipes: [...state.recipes, newRecipe] 
//   })),
  
//   // Action: Set all recipes
//   setRecipes: (recipes) => set({ recipes }),
  
//   // Action: Delete a recipe
//   deleteRecipe: (id) => set((state) => ({
//     recipes: state.recipes.filter(recipe => recipe.id !== id)
//   })),
  
//   // Action: Update a recipe
//   updateRecipe: (updatedRecipe) => set((state) => ({
//     recipes: state.recipes.map(recipe =>
//       recipe.id === updatedRecipe.id ? updatedRecipe : recipe
//     )
//   }))
// }));

// export default useRecipeStore;

// import { create } from 'zustand';

// export const useRecipeStore = create((set) => ({
//   recipes: [],

//   addRecipe: (newRecipe) =>
//     set((state) => ({ recipes: [...state.recipes, newRecipe] })),

//   deleteRecipe: (id) =>
//     set((state) => ({
//       recipes: state.recipes.filter((recipe) => recipe.id !== id),
//     })),

//   updateRecipe: (updatedRecipe) =>
//     set((state) => ({
//       recipes: state.recipes.map((recipe) =>
//         recipe.id === updatedRecipe.id ? updatedRecipe : recipe
//       ),
//     })),
// }));
// export default useRecipeStore;

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useRecipeStore = create(
  persist(
    (set, get) => ({
      // State
      recipes: [],
      searchTerm: '',
      filteredRecipes: [],
      favorites: [],
      recommendations: [],

      // Recipe actions
      addRecipe: (newRecipe) =>
        set((state) => ({ recipes: [...state.recipes, newRecipe] })),

      deleteRecipe: (id) =>
        set((state) => ({
          recipes: state.recipes.filter((recipe) => recipe.id !== id),
          favorites: state.favorites.filter((fid) => fid !== id),
        })),

      updateRecipe: (updatedRecipe) =>
        set((state) => ({
          recipes: state.recipes.map((recipe) =>
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe
          ),
        })),

      // Search actions
      setSearchTerm: (term) => {
        set({ searchTerm: term });
        get().filterRecipes();
      },

      filterRecipes: () => {
        const { recipes, searchTerm } = get();
        const filtered = recipes.filter((r) =>
          r.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        set({ filteredRecipes: filtered });
      },

      // Favorites actions
      addFavorite: (recipeId) =>
        set((state) => ({ favorites: [...state.favorites, recipeId] })),

      removeFavorite: (recipeId) =>
        set((state) => ({
          favorites: state.favorites.filter((id) => id !== recipeId),
        })),

      // Recommendations
      generateRecommendations: () =>
        set((state) => {
          const recommended = state.recipes
            .filter((r) => !state.favorites.includes(r.id))
            .sort(() => 0.5 - Math.random())
            .slice(0, 3);
          return { recommendations: recommended };
        }),
    }),
    {
      name: 'recipe-storage', // localStorage key
    }
  )
);
