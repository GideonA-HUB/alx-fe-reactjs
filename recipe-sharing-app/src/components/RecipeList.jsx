import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  const filteredRecipes = recipes.filter((r) =>
    r.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.length === 0 && <p>No recipes match your search.</p>}
      {filteredRecipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{ border: '1px solid #ddd', padding: '8px', margin: '8px 0' }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <div>
            <Link to={`/recipes/${recipe.id}`} style={{ marginRight: 8 }}>
              View
            </Link>
            <Link to={`/edit/${recipe.id}`}>Edit</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
