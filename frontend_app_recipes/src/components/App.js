import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Categories from './Categories';
import Category from './Category';
import Recipe from './Recipe';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Categories />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/recipe/:id" element={<Recipe />} />
        </Routes>
    );
}

export default App;
