import React, { useState, useEffect } from 'react';
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
import inputCheck from '../../utils/inputCheck';

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

		const err = inputCheck(emailInput, pwInput, confirmPwInput);
		if (err) return alert(err);

		registerUser(emailInput, pwInput);

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
					helperText="Must be at least 5 characters long"
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
