import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetail() {
  const { id } = useParams(); // get recipe id from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = data.find((item) => item.id === Number(id));
        setRecipe(foundRecipe);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10">Loading recipe...</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Back button */}
      <Link
        to="/"
        className="text-blue-600 hover:underline mb-4 inline-block"
      >
        &larr; Back to Home
      </Link>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 text-center text-blue-700">
        {recipe.title}
      </h1>

      {/* Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full rounded-lg shadow mb-6"
      />

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Summary</h2>
        <p>{recipe.summary}</p>
      </section>

      {/* Ingredients */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Instructions */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside">
          {recipe.instructions.split('. ').map((step, index) => {
            if (!step.trim()) return null;
            // Remove any leading numbers like "1. " from the step
            const cleanedStep = step.replace(/^\d+\.\s*/, '');
            return <li key={index}>{cleanedStep.trim()}</li>;
          })}
        </ol>
      </section>
    </div>
  );
}

export default RecipeDetail;
