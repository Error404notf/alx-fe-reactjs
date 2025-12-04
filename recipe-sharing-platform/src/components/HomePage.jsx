import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipes from public/data.json
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link
  to="/add-recipe"
  className="block w-fit mx-auto mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
>
  Add New Recipe
</Link>
      <h1 className="text-4xl font-bold text-center text-blue-700">
        Recipe Sharing Platform
      </h1>

      <div className="px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {recipes.length === 0 ? (
          <p className="text-center">Loading recipes...</p>
        ) : (
          recipes.map((recipe) => (
            <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800 mb-2">
                    {recipe.title}
                  </h2>
                  <p className="text-gray-600 text-sm">{recipe.summary}</p>
                </div>
              </div>
            </Link>
            
          ))
        )}
      </div>
    </div>
  );
}

export default HomePage;
