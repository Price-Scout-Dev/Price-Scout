import React from 'react';
import { Link } from 'react-router-dom';

const LogInNavBar = () => (
	<nav>
		<Link to="/">Register</Link>
		<Link to="/about">About</Link>
	</nav>
);

export default LogInNavBar;
