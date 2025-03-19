import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from "./components/App.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
