import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

// const RecipeList = () => {
//   const recipes = useRecipeStore(state => state.recipes);

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>
//         📖 All Recipes
//       </h2>
      
//       {recipes.length === 0 ? (
//         <p style={{ color: '#7f8c8d', fontSize: '18px' }}>
//           No recipes yet! Add your first recipe below. 👇
//         </p>
//       ) : (
//         <div style={{ 
//           display: 'grid', 
//           gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
//           gap: '20px'
//         }}>
//           {recipes.map(recipe => (
//             <div 
//               key={recipe.id}
//               style={{
//                 backgroundColor: 'white',
//                 padding: '20px',
//                 borderRadius: '10px',
//                 boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//                 border: '1px solid #ecf0f1'
//               }}
//             >
//               <h3 style={{ 
//                 color: '#e74c3c', 
//                 marginTop: '0',
//                 marginBottom: '10px' 
//               }}>
//                 {recipe.title}
//               </h3>
//               <p style={{ 
//                 color: '#555', 
//                 lineHeight: '1.6',
//                 marginBottom: '0'
//               }}>
//                 {recipe.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default RecipeList;

const RecipeList = () => {
  const { recipes, filteredRecipes, searchTerm } = useRecipeStore((state) => ({
    recipes: state.recipes,
    filteredRecipes: state.filteredRecipes,
    searchTerm: state.searchTerm,
  }));

  const listToDisplay =
    searchTerm.trim().length > 0 ? filteredRecipes : recipes;

  return (
    <div>
      {listToDisplay.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        listToDisplay.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;