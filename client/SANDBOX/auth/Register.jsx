import React from 'react';
import inputHook from '../hooks/inputHook';
import NavBar from '../nav/NavBar';
import { Button, Box } from '@material-ui/core';
import { TextField } from '@material-ui/core';

const Register = ({ setUser, postUser }) => {
	//GET THE USER INPUT SO WE CAN ISSUE A POST TO DB W/ postUser, AND THEN UPDATE APP STATE W/ setUser

	const [emailInput, updateEmail, resetEmail] = inputHook('');
	const [pwInput, updatePw, resetPw] = inputHook('');

	const formSubmit = (e) => {
		e.preventDefault();

		postUser(emailInput, pwInput);
		setUser(emailInput, pwInput);

		resetEmail();
		resetPw();
	};

	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			minHeight="80vh"
			border={1}
		>
			<div>
				{/* <NavBar /> */}
				<form onSubmit={formSubmit}>
					<h1>Register</h1>
					{/* <input value={emailInput} onChange={updateEmail} placeholder="email" /> */}
					<TextField id="email" label="email" variant="outlined" />
					{/* <input
						type="password"
						value={pwInput}
						onChange={updatePw}
						placeholder="password"
					/> */}
					<TextField id="password" label="password" variant="outlined" />
					<Button variant="contained" color="primary">
						Submit
					</Button>
				</form>
			</div>
		</Box>
	);
};

export default Register;
