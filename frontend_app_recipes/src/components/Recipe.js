import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/Recipe.css';

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/recipes/${id}/`)
      .then(response => setRecipe(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!recipe) return <div>Загрузка...</div>;

  return (
    <div className="recipe-container">
      <h1 className="recipe-title">{recipe.title}</h1>
      <p className="recipe-description">{recipe.description}</p>
      <h2 className="ingredients-title">Ингредиенты</h2>
      <p className="ingredients-content">{recipe.ingredients}</p>
      <h2 className="instructions-title">Инструкции</h2>
      <p className="instructions-content">{recipe.instructions}</p>
    </div>
  );
};

export default Recipe;
