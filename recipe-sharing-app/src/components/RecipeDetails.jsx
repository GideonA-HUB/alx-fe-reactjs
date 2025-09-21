import { useRecipeStore } from './recipeStore';
import { useParams, Link } from 'react-router-dom';
import DeleteRecipeButton from './DeleteRecipeButton';
import FavoriteButton from './FavoriteButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === id)
  );

  if (!recipe) {
    return (
      <div>
        <h2>Recipe not found</h2>
        <Link to="/">Back to home</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <div style={{ marginTop: 12 }}>
        <Link to={`/edit/${recipe.id}`} style={{ marginRight: 8 }}>
          Edit
        </Link>
        <DeleteRecipeButton recipeId={recipe.id} />
        <FavoriteButton recipeId={recipe.id} />
      </div>
      <div style={{ marginTop: 16 }}>
        <Link to="/">← Back to list</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
