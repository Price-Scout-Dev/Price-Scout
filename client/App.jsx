import React, { useState } from 'react';
import Register from './SANDBOX/auth/Register';
import Login from './SANDBOX/auth/Login';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const App = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState(''); 
	const [userId, setId] = useState('');

	const formHandler = ({ email, password, id }) => {
		fetch('/api/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'Application/JSON',
			},
			body: JSON.stringify(body),
		})
			.then((res) => res.json())
			.then(({ email, userId }) => {
				setEmail(email);
				setId(userId);
			})
			.catch((err) =>
				console.log('CreateCharacter fetch /api/character: ERROR: ', err)
			);
		setEmail(email);
		setPassword(password);
	};

	return (
		<Router>
			<BrowserRouter>
				<div>
					<Route path="/" component={Login} />
				</div>
			</BrowserRouter>
		</Router>
	);
};
