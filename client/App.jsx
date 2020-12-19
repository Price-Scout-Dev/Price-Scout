import React from 'react';
import Register from './SANDBOX/auth/Register';
import Login from './SANDBOX/auth/Login';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Route path="/" component={Login} />
			</div>
		</BrowserRouter>
	);
};

export default App;
