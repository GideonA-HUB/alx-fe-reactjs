import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required!");
      return;
    }

    const ingredientList = ingredients.split(",").map((item) => item.trim());
    if (ingredientList.length < 2) {
      setError("Please include at least two ingredients.");
      return;
    }

    // Simulate form submission (e.g., could post to API later)
    console.log({
      title,
      ingredients: ingredientList,
      steps,
    });

    alert("Recipe submitted successfully!");
    setError("");
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4 sm:p-6 md:p-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-md sm:max-w-lg"
      >
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          Add a New Recipe
        </h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Recipe Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Ingredients (comma-separated)
          </label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 h-24 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            placeholder="e.g., 2 eggs, 1 cup of milk"
          />
        </div>

        {/* Preparation Steps */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Preparation Steps
          </label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            placeholder="Describe the steps to prepare this recipe"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded-lg transition duration-300 ease-in-out"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
