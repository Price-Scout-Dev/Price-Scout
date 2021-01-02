import React from 'react';
import { AppBar, Button, Typography, Toolbar } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import useStyles from '../../style/theme';

const NavBar = ({ email, logOut }) => {
	const classes = useStyles();

	return (
		<AppBar>
			<Toolbar className={classes.productAppBar}>
				<div className={classes.navBar}>
					<AccountCircle />
					<Typography className={classes.username} variant="h6">
						{email}
					</Typography>
				</div>
				<Button onClick={logOut} color="inherit" endIcon={<ExitToAppIcon />}>
					Logout
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
