import React from 'react';
import useInput from '../hooks/useInput';
import LoginNavBar from '../nav/LoginNavBar';
import { Button, Box, Divider, AppBar } from '@material-ui/core';
import { TextField } from '@material-ui/core';

const Login = ({ loginUser, ...rest }) => {
	//GET THE USER INPUT SO WE CAN ISSUE A "GET" TO DB W/ loginUser
	const [emailInput, updateEmail, resetEmail] = useInput('');
	const [pwInput, updatePw, resetPw] = useInput('');

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!emailInput) return alert('Fill in the email input please!');
		else if (pwInput.length < 5)
			return alert('Enter password (must be at least 5 characters long)!');
		else if (!emailInput.includes('@') || !emailInput.includes('.com'))
			return alert('Invalid email format. Try again!');

		loginUser(emailInput, pwInput);
		rest.history.push('/');
		resetEmail();
		resetPw();
	};

	return (
		<>
			<AppBar>
				<LoginNavBar />
			</AppBar>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				minHeight="95vh"
				style={{ background: 'linear-gradient(to right, #ece9e6, #ffffff)' }}
				border={1}
			>
				<form
					// onSubmit={handleSubmit}
					style={{
						padding: '3rem 5rem',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: 'white',
						boxShadow: '0 0 10px gray',
					}}
				>
					<h1 style={{ fontFamily: 'Verdana, sans-serif' }}>Price Tracker</h1>
					<TextField
						id="email"
						label="Email"
						variant="outlined"
						value={emailInput}
						onChange={updateEmail}
					/>
					<TextField
						id="password"
						label="Password"
						variant="outlined"
						type="password"
						value={pwInput}
						onChange={updatePw}
					/>
					<Button
						onClick={handleSubmit}
						variant="contained"
						color="primary"
						style={{ marginBottom: '1rem', width: '15rem' }}
					>
						Log In
					</Button>
					<Divider variant="middle" style={{ width: '10rem' }} />
					<Button
						variant="contained"
						style={{
							backgroundColor: '#42b72a',
							color: 'white',
							margin: '1rem 0',
						}}
					>
						Create Account
					</Button>
				</form>
			</Box>
		</>
	);
};

export default Login;
