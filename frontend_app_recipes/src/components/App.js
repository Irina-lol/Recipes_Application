import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Categories from './Categories';
import Category from './Category';
import Recipe from './Recipe';

function App() {
    <Routes>
        <Route path="/" exact component={Categories} />
        <Route path="/category/:id" component={Category} />
        <Route path="/recipe/:id" component={Recipe} />
    </Routes>
}

export default App;
