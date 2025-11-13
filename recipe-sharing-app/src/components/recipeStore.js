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
      recipes: [],
      searchTerm: '',
      filteredRecipes: [],

      addRecipe: (newRecipe) =>
        set((state) => ({ recipes: [...state.recipes, newRecipe] })),

      deleteRecipe: (id) =>
        set((state) => ({
          recipes: state.recipes.filter((recipe) => recipe.id !== id),
        })),

      updateRecipe: (updatedRecipe) =>
        set((state) => ({
          recipes: state.recipes.map((recipe) =>
            recipe.id === updatedRecipe.id ? updatedRecipe : recipe
          ),
        })),

      setSearchTerm: (term) => {
        set({ searchTerm: term });
        get().filterRecipes(); // trigger filtering when search term changes
      },

      filterRecipes: () => {
        const { recipes, searchTerm } = get();
        const filtered = recipes.filter((r) =>
          r.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        set({ filteredRecipes: filtered });
      },
    }),
    { name: 'recipe-storage' } // persist data in localStorage
  )
);
