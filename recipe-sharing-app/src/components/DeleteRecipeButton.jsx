import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    // Optional confirmation
    if (!window.confirm('Delete this recipe?')) return;
    deleteRecipe(recipeId);
    navigate('/');
  };

  return (
    <button onClick={handleDelete} style={{ color: 'white', background: 'red', border: 'none', padding: '6px 10px', borderRadius: 4 }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
