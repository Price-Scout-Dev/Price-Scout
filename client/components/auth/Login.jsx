import React, { useState } from 'react';
import useInput from '../hooks/useInput';
import Register from './Register';
import LoginNavBar from '../nav/LoginNavBar';
import {
	Button,
	Box,
	Divider,
	AppBar,
	Paper,
	TextField,
	Typography,
	Grow,
	Slide,
	IconButton,
	InputAdornment,
	Dialog,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import useStyles from '../../style/theme';
import inputCheck from '../../utils/inputCheck';

const Login = ({ registerUser, loginUser, ...rest }) => {
	const [emailInput, updateEmail, resetEmail] = useInput('');
	const [pwInput, updatePw, resetPw] = useInput('');
	const [open, setOpen] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const classes = useStyles();

	const handleClickOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handleClickShowPassword = () => setShowPassword(!showPassword);

	const handleSubmit = (e) => {
		e.preventDefault();

		const err = inputCheck(emailInput, pwInput);
		if (err) return alert(err);

		loginUser(emailInput, pwInput);

		resetEmail();
		resetPw();
	};

	return (
		<div
			className={classes.root}
			style={{ filter: open ? 'blur(5px)' : 'none' }}
		>
			<AppBar>
				<LoginNavBar />
			</AppBar>
			<Box className={classes.loginBox} flexWrap="wrap">
				<Grow in>
					<div>
						<Typography
							variant="h2"
							color="primary"
							style={{ fontWeight: '600' }}
						>
							Price Tracker
						</Typography>
						<Typography variant="body1">
							Track items on{' '}
							<span
								className={classes.googleLetters}
								style={{ color: '#4285F4' }}
							>
								G
							</span>
							<span
								className={classes.googleLetters}
								style={{ color: '#DB4437' }}
							>
								o
							</span>
							<span
								className={classes.googleLetters}
								style={{ color: '#F4B400' }}
							>
								o
							</span>
							<span
								className={classes.googleLetters}
								style={{ color: '#4285F4' }}
							>
								g
							</span>
							<span
								className={classes.googleLetters}
								style={{ color: '#0F9D58' }}
							>
								l
							</span>
							<span
								className={classes.googleLetters}
								style={{ color: '#DB4437' }}
							>
								e
							</span>{' '}
							and get price drop notifications anytime.
						</Typography>
					</div>
				</Grow>
				<Slide direction="up" in>
					<Paper className={classes.loginPaper} elevation={10}>
						<form className={classes.loginForm} onSubmit={handleSubmit}>
							<TextField
								className={classes.loginTextField}
								id="email"
								label="Email"
								variant="outlined"
								value={emailInput}
								onChange={updateEmail}
							/>
							<TextField
								className={classes.loginTextField}
								id="password"
								label="Password"
								variant="outlined"
								value={pwInput}
								onChange={updatePw}
								type={showPassword ? 'text' : 'password'}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton
												aria-label="toggle password visibility"
												onClick={handleClickShowPassword}
											>
												{showPassword ? <Visibility /> : <VisibilityOff />}
											</IconButton>
										</InputAdornment>
									),
								}}
							/>
							<Button
								className={classes.loginBtn}
								type="submit"
								onClick={handleSubmit}
								variant="contained"
								color="primary"
							>
								Log In
							</Button>
						</form>
						<Divider className={classes.loginDivider} variant="middle" />
						<Button
							className={classes.loginCreateAccountBtn}
							onClick={handleClickOpen}
							variant="contained"
						>
							Create Account
						</Button>
						<Dialog open={open} onClose={handleClose}>
							<Register registerUser={registerUser} setOpen={setOpen} />
						</Dialog>
					</Paper>
				</Slide>
			</Box>
		</div>
	);
};

export default Login;
