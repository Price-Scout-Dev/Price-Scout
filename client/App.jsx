import React, { useState, useEffect } from 'react';
import PrivateRoute from './components/routes/PrivateRoute';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import About from './components/about/About';
import Main from './components/Main';
import {
	BrowserRouter,
	Switch,
	Route,
	withRouter,
	Link,
} from 'react-router-dom';

const App = (props) => {
	console.log(props);
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
				setPassword(password);
			})
			.catch((err) => console.log('ERROR: ', err));

		console.log('registerUser:', userId, email, password);
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
				console.log('USER ID:', userId);
				setEmail(email);
				setId(userId);
				setPassword(password);
				//props.history.push('/');
			})
			.catch((err) => console.log('ERROR: ', err));

		console.log('loginUser:', userId, email, password);
	};

	useEffect(() => {
		console.log('I am cdm', email, password, userId);
	}, []);

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

export default withRouter(App);
