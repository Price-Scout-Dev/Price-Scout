import React from 'react';
import { CircularProgress, Typography } from '@material-ui/core';
import useStyles from '../../style/theme';

const Spinner = () => {
	const classes = useStyles();
	return (
		<div className={classes.spinner}>
			<CircularProgress size={70} style={{ color: 'white' }} />
			<Typography variant="h6" style={{ color: 'white', marginTop: '1rem' }}>
				Armadillos are attempting to add your product..
			</Typography>
		</div>
	);
};

export default Spinner;
