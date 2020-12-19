import React from 'react';
import useInput from '../hooks/useInput';
import RegNavBar from '../nav/RegNavBar';
import { Button, Box, AppBar } from '@material-ui/core';
import { TextField } from '@material-ui/core';

const Register = ({ registerUser }) => {
	//GET THE USER INPUT SO WE CAN ISSUE A POST TO DB W/ postUser, AND THEN UPDATE APP STATE W/ setUser

	const [emailInput, updateEmail, resetEmail] = useInput('');
	const [pwInput, updatePw, resetPw] = useInput('');

	const handleSubmit = (e) => {
		e.preventDefault();

		//if emailInput and pwInput are cool

		registerUser(emailInput, pwInput);
	
		resetEmail();
		resetPw();
	};

	return (
		<>
			<AppBar>
				<RegNavBar />
			</AppBar>
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				minHeight="80vh"
				border={1}
			>
				<div>
					<form onSubmit={handleSubmit}>
						<h1>Register</h1>
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
						<Button variant="contained" color="primary">
							Submit
						</Button>
					</form>
				</div>
			</Box>
		</>
	);
};

export default Register;
