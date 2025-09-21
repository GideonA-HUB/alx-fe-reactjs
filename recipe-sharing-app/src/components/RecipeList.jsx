import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 && <p>No recipes yet. Add one!</p>}
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ border: '1px solid #ddd', padding: '8px', margin: '8px 0' }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <div>
            <Link to={`/recipes/${recipe.id}`} style={{ marginRight: 8 }}>View</Link>
            <Link to={`/edit/${recipe.id}`}>Edit</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
