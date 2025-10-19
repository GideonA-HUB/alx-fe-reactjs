import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500 text-lg">
        Loading recipe...
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h1 className="text-3xl font-bold text-blue-700 mb-4">{recipe.title}</h1>
        <p className="text-gray-600 mb-6">{recipe.summary}</p>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>2 cups of ingredient A</li>
            <li>1 tablespoon of ingredient B</li>
            <li>Salt, pepper to taste</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Prepare all ingredients.</li>
            <li>Heat the pan and cook ingredients for 10 minutes.</li>
            <li>Serve hot and enjoy your meal!</li>
          </ol>
        </div>

        <Link
          to="/"
          className="inline-block mt-6 text-blue-600 hover:text-blue-400 font-medium"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetail;
