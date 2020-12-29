import React, { useState } from 'react';
import useInput from '../hooks/useInput';
import {
	Button,
	TextField,
	IconButton,
	Checkbox,
	FormControlLabel,
	DialogTitle,
	Divider,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from '../../style/theme';

const Register = ({ registerUser, setOpen, ...rest }) => {
	const [emailInput, updateEmail, resetEmail] = useInput('');
	const [pwInput, updatePw, resetPw] = useInput('');
	const [confirmPwInput, confirmUpdatePw, confirmResetPw] = useInput('');
	const [showPassword, setShowPassword] = useState(false);
	const classes = useStyles();

	const handleClose = () => setOpen(false);
	const handleClickShowPassword = () => setShowPassword(!showPassword);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!emailInput) return alert('Fill in the email input please!');
		else if (pwInput.length < 5)
			return alert('Enter password (must be at least 5 characters long)!');
		else if (!emailInput.includes('@') || !emailInput.includes('.com'))
			return alert('Invalid email format. Try again!');
		else if (pwInput !== confirmPwInput)
			return alert('Passwords entered do not match! Try again.');

		registerUser(emailInput, pwInput);

		rest.history.push('/');
		resetEmail();
		resetPw();
		confirmResetPw();
	};

	return (
		<div className={classes.registerForm}>
			<IconButton
				aria-label="close"
				onClick={handleClose}
				style={{ alignSelf: 'flex-end' }}
			>
				<CloseIcon />
			</IconButton>
			<DialogTitle style={{ padding: '0' }}>Create Account</DialogTitle>
			<Divider className={classes.registerDivider} variant="middle" />
			<form className={classes.loginForm} onSubmit={handleSubmit}>
				<TextField
					className={classes.loginTextField}
					id="email"
					label="Email"
					variant="filled"
					value={emailInput}
					onChange={updateEmail}
				/>
				<TextField
					className={classes.loginTextField}
					id="password"
					label="Password"
					variant="filled"
					value={pwInput}
					onChange={updatePw}
					type={showPassword ? 'text' : 'password'}
				/>
				<TextField
					className={classes.loginTextField}
					id="confirmPassword"
					label="Confirm Password"
					variant="filled"
					value={confirmPwInput}
					onChange={confirmUpdatePw}
					type={showPassword ? 'text' : 'password'}
				/>
				<FormControlLabel
					control={
						<Checkbox onClick={handleClickShowPassword} color="primary" />
					}
					label="Show Password"
					style={{ width: '40%' }}
				/>
				<Button
					className={classes.registerBtn}
					type="submit"
					onClick={handleSubmit}
					variant="contained"
					color="primary"
				>
					Sign Up
				</Button>
			</form>
		</div>
	);
};

export default Register;
