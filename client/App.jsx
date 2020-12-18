import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/login">Login</Link>
						</li>
					</ul>
				</nav>
				{email && password ? (
					<Main email={email} />
				) : (
					<Registration formHandler={formHandler} />
				)}
			</div>
		</Router>
	);
};

export default App;
