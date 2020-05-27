import React, {Component} from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component {

	static propTypes = {
		recipes: PropTypes.arrayOf(PropTypes.object).isRequired
	}
	
	render() {
		const recipes = this.props.recipes.map((recipe, index) => (
			<Recipe key={recipe.id} {...recipe}/>
		));
		
		return(
			<div className="recipe-list">
				{recipes}
			</div>
		);	
	}
}

export default RecipeList;