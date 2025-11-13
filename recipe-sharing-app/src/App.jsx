// import RecipeList from './components/RecipeList';
// import AddRecipeForm from './components/AddRecipeForm';

// function App() {
//   return (
//     <div style={{ 
//       backgroundColor: '#ecf0f1', 
//       minHeight: '100vh',
//       padding: '20px'
//     }}>
//       <h1 style={{ 
//         textAlign: 'center', 
//         color: '#2c3e50',
//         fontSize: '48px',
//         marginBottom: '30px'
//       }}>
//         🍳 Recipe Sharing App
//       </h1>
      
//       <AddRecipeForm />
//       <RecipeList />
//     </div>
//   );
// }

// export default App;

import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🍳 Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
