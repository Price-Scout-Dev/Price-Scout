import React from 'react';
import useInput from '../hooks/useInput';
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
} from '@material-ui/core';
import useStyles from '../../style/theme';

const Login = ({ loginUser, ...rest }) => {
	//GET THE USER INPUT SO WE CAN ISSUE A "GET" TO DB W/ loginUser
	const [emailInput, updateEmail, resetEmail] = useInput('');
	const [pwInput, updatePw, resetPw] = useInput('');
	const classes = useStyles();

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
		<div className={classes.root}>
			<AppBar>
				<LoginNavBar />
			</AppBar>
			<Box className={classes.loginBox}>
				<Grow in>
					<div>
						<Typography variant="h2">Price Tracker</Typography>
						<Typography variant="body1" display="inline">
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
							type="password"
							value={pwInput}
							onChange={updatePw}
						/>
						<Button
							className={classes.loginBtn}
							onClick={handleSubmit}
							variant="contained"
							color="primary"
						>
							Log In
						</Button>
						<Divider className={classes.loginDivider} variant="middle" />
						<Button
							className={classes.loginCreateAccountBtn}
							variant="contained"
						>
							Create Account
						</Button>
					</Paper>
				</Slide>
			</Box>
		</div>
	);
};

export default Login;
