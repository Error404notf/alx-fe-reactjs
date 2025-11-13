// import { useRecipeStore } from './recipeStore';

// const DeleteRecipeButton = ({ recipeId }) => {
//   const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

//   return (
//     <button onClick={() => deleteRecipe(recipeId)}>🗑️ Delete</button>
//   );
// };

// export default DeleteRecipeButton;


import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // redirect to homepage after deleting
  };

  return (
    <button onClick={handleDelete}>🗑️ Delete</button>
  );
};

export default DeleteRecipeButton;

