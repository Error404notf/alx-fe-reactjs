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

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <h1>🍳 Recipe Sharing App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

