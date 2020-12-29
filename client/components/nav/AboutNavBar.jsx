import React from 'react';
import { Link } from 'react-router-dom';

const AboutNavBar = () => (
	<nav>
		<Link to="/">Login</Link>
		<Link to="/register">Register</Link>
	</nav>
);

export default AboutNavBar;
