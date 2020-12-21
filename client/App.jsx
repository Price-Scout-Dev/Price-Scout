import React, { useState, useEffect } from 'react';
import PrivateRoute from './components/routes/PrivateRoute';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import About from './components/about/About';
import Main from './components/Main';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const App = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [userId, setId] = useState('');

	const registerUser = (email, password) => {
		// fetch('/api/auth/signup', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'Application/JSON',
		// 	},
		// 	body: JSON.stringify({ email, password }),
		// })
		// 	.then((res) => res.json())
		// 	.then(({ email, userId }) => {
		// 		setEmail(email);
		// 		setId(userId);
		// 	})
		// 	.catch((err) => console.log('ERROR: ', err));
		setId(1);
		setPassword(password);
		setEmail(email);

		console.log('regUser RAN!', email, password);
	};

	const loginUser = (email, password) => {
		// fetch('/api/auth/login', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'Application/JSON',
		// 	},
		// 	body: JSON.stringify({ email, password }),
		// })
		// 	.then((res) => res.json())
		// 	.then(({ email, userId }) => {
		// 		setEmail(email);
		// 		setId(userId);
		// 	})
		// 	.catch((err) => console.log('ERROR: ', err));
		setId(1);
		setPassword(password);
		setEmail(email);
		console.log('loginUser RAN!', email, password);
	};

	return (
		<BrowserRouter>
			<Switch>
				<Route
					path="/register"
					exact
					render={(props) => (
						<Register registerUser={registerUser} {...props} />
					)}
				/>
				<Route path="/about" exact component={About} />
				<Route
					path="/login"
					exact
					render={(props) => <Login loginUser={loginUser} {...props} />}
				/>
				<PrivateRoute
					path="/"
					exact
					component={Main}
					email={email}
					password={password}
					userId={userId}
				/>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
