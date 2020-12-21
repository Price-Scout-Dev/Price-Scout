import React from 'react';
import useInput from '../hooks/useInput';
import RegNavBar from '../nav/RegNavBar';
import { Button, Box, AppBar } from '@material-ui/core';
import { TextField } from '@material-ui/core';

const Register = ({ registerUser }) => {
	const [emailInput, updateEmail, resetEmail] = useInput('');
	const [pwInput, updatePw, resetPw] = useInput('');

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!emailInput) return alert('Fill in the email input please!');
		else if (pwInput.length < 5)
			return alert('Enter password (must be at least 5 characters long)!');
		else if (!emailInput.includes('@') || !emailInput.includes('.com'))
			return alert('Invalid email format. Try again!');

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
					<form>
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
						<Button onClick={handleSubmit} variant="contained" color="primary">
							Submit
						</Button>
					</form>
				</div>
			</Box>
		</>
	);
};

export default Register;
