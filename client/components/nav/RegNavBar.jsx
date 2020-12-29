import React from 'react';
import { Link } from 'react-router-dom';

const RegNavBar = () => (
	<nav>
		<Link to="/">Login</Link>
		<Link to="/about">About</Link>
	</nav>
);

export default RegNavBar;
