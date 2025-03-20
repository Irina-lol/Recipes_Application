import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import '../styles/Category.css';

const Category = () => {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/categories/${id}/`)
      .then(response => setCategory(response.data))
      .catch(error => console.log(error));

    axios.get(`http://127.0.0.1:8000/api/recipes/?category=${id}`)
      .then(response => setRecipes(response.data))
      .catch(error => console.log(error));
  }, [id]);

  if (!category) return <div>Загрузка...</div>;

  return (
    <div className="category-container">
      <h1 className="category-title">{category.name}</h1>
      <p className="category-description">{category.description}</p>
      <h2 className="recipes-title">Рецепты</h2>
      <ul className="recipes-list">
        {recipes.map(recipe => (
          <li key={recipe.id} className="recipe-item">
            <Link to={`/recipe/${recipe.id}`} className="recipe-link">
              {recipe.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
