import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

class Navbar extends Component {
	
	render() {
		return (
			<header>
				<h2>
					<a>Recipe App</a>
				</h2>
				<nav>
					<li>
						<a onClick={this.props.onNewRecipe}>New Recipe</a>
					</li>
					<li>
						<a>Home</a>
					</li>
					<li>
						<a>About</a>
					</li>
					<li>
						<a>Contact Us</a>
					</li>
				</nav>
			</header>
		);
	}
}

Navbar.propTypes = {
	onNewRecipe: PropTypes.func
}

Navbar.defaultProps = {
	onNewRecipe() {},
};

export default Navbar;