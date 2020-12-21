import React, { useState } from 'react';
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
		fetch('/api/auth/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'Application/JSON',
			},
			body: JSON.stringify({ email, password }),
		})
			.then((res) => res.json())
			.then(({ email, userId }) => {
				setEmail(email);
				setId(userId);
			})
			.catch((err) => console.log('ERROR: ', err));
		// setPassword(password);
		console.log('RegisterUser RAN!', email, password);
	};

	const loginUser = (email, password) => {
		fetch('/api/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'Application/JSON',
			},
			body: JSON.stringify({ email, password }),
		})
			.then((res) => res.json())
			.then(({ email, userId }) => {
				setEmail(email);
				setId(userId);
			})
			.catch((err) => console.log('ERROR: ', err));
		setPassword(password);
		// setEmail(email);
		// setPassword(password);
		console.log('loginUser RAN!', email, password);
	};

	return email && password ? (
		<Main email={email} password={password} />
	) : (
		<BrowserRouter>
			<Switch>
				<Route
					path="/register"
					exact
					render={() => <Register registerUser={registerUser} />}
				/>
				<Route path="/about" exact component={About} />
				<Route path="/" exact render={() => <Login loginUser={loginUser} />} />
			</Switch>
		</BrowserRouter>
	);
};

export default App;
