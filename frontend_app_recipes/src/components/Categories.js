import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Categories.css';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/categories/')
      .then(response => setCategories(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="categories-container">
      <h1 className="categories-title">Категории блюд</h1>
      <ul className="categories-list">
        {categories.map(category => (
          <li key={category.id} className="category-item">
            <Link to={`/category/${category.id}`} className="category-link">
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
