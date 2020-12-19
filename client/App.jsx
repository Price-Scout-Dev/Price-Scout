import React, { useState } from 'react';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import About from './components/about/About'
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
		<BrowserRouter>
			<div>
				<Route path="/register" exact component={Register} />
				<Route path="/about" exact component={About} />
				<Route path="/" exact component={Login} />
			</div>
		</BrowserRouter>
	);
};

export default App;
