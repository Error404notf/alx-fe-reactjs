import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!title.trim()) validationErrors.title = "Title is required.";
    if (!ingredients.trim()) validationErrors.ingredients = "Ingredients are required.";
    if (!steps.trim()) validationErrors.steps = "Preparation steps are required.";

    // Example extra rule: At least 2 ingredients
    const ingredientsList = ingredients.split("\n").filter((item) => item.trim() !== "");
    if (ingredientsList.length < 2) {
      validationErrors.ingredients = "Include at least two ingredients.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log({
        title,
        ingredients: ingredientsList,
        steps,
      });

      // clear form
      setTitle("");
      setIngredients("");
      setSteps("");
      alert("Recipe submitted!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-8 p-6 bg-white shadow-md rounded-lg space-y-5"
    >
      <h2 className="text-2xl font-bold text-gray-800">Add New Recipe</h2>

      {/* Title */}
      <div>
        <label className="block font-medium mb-1">Recipe Title</label>
        <input
          type="text"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      {/* Ingredients */}
      <div>
        <label className="block font-medium mb-1">Ingredients</label>
        <textarea
          className="w-full p-2 border rounded-md h-32 focus:outline-none focus:ring focus:ring-blue-300"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Write each ingredient on a new line..."
        />
        {errors.ingredients && (
          <p className="text-red-500 text-sm">{errors.ingredients}</p>
        )}
      </div>

      {/* Steps */}
      <div>
        <label className="block font-medium mb-1">Preparation Steps</label>
        <textarea
          className="w-full p-2 border rounded-md h-32 focus:outline-none focus:ring focus:ring-blue-300"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />
        {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Submit Recipe
      </button>
    </form>
  );
}
