import React from 'react';
import { Link } from 'react-router-dom';

const LoginNavBar = () => (
	<nav>
		<Link to="/register" style={{ visibility: 'hidden' }}>
			Register
		</Link>
		<Link to="/about" style={{ visibility: 'hidden' }}>
			About
		</Link>
	</nav>
);

export default LoginNavBar;
