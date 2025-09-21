import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) =>
    state.favorites.map((id) => state.recipes.find((r) => r.id === id))
  );

  if (favorites.length === 0) {
    return <p>No favorites yet. Add some recipes!</p>;
  }

  return (
    <div>
      <h2>⭐ My Favorites</h2>
      {favorites.map(
        (recipe) =>
          recipe && (
            <div key={recipe.id} style={{ marginBottom: 8 }}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <Link to={`/recipes/${recipe.id}`}>View</Link>
            </div>
          )
      )}
    </div>
  );
};

export default FavoritesList;
