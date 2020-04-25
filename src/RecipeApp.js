import React, { Component } from 'react';
import logo from './logo.svg';
import Recipe from './Recipe';
import RecipeList from './RecipeList';
import Navbar from './Navbar';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
		<Navbar />
        <RecipeList />
      </div>
    );
  }
}

export default RecipeApp;
