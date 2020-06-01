import React, { Component } from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';
import './RecipeList.css';

class RecipeList extends Component {
	render() {
		const { onDelete } = this.props;
		const recipes = this.props.recipes.map((r, index) => (
			<Recipe key={r.id} {...r} onDelete={onDelete} />
		));

		return <div className="recipe-list">{recipes}</div>;
	}
}

RecipeList.propTypes = {
	recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
	onDelete: PropTypes.func.isRequired
};

export default RecipeList;