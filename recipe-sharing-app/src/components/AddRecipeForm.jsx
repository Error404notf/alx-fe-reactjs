import { useState } from 'react';
import useRecipeStore from './recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore(state => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Don't add if fields are empty
    if (!title.trim() || !description.trim()) {
      alert('Please fill in all fields!');
      return;
    }
    
    // Add the recipe
    addRecipe({ 
      id: Date.now(), 
      title, 
      description 
    });
    
    // Clear the form
    setTitle('');
    setDescription('');
  };

  return (
    <div style={{ 
      backgroundColor: 'white',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      maxWidth: '500px',
      margin: '20px'
    }}>
      <h2 style={{ color: '#2c3e50', marginTop: '0' }}>
        ➕ Add New Recipe
      </h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Recipe Title"
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              border: '2px solid #ecf0f1',
              borderRadius: '5px',
              boxSizing: 'border-box'
            }}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Recipe Description"
            rows="4"
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '16px',
              border: '2px solid #ecf0f1',
              borderRadius: '5px',
              boxSizing: 'border-box',
              resize: 'vertical'
            }}
          />
        </div>
        
        <button 
          type="submit"
          style={{
            backgroundColor: '#3498db',
            color: 'white',
            padding: '12px 30px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%',
            fontWeight: 'bold'
          }}
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;