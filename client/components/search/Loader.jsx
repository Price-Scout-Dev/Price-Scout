import React from 'react';
import { LinearProgress, Typography } from '@material-ui/core';

const Loader = () => {
	return (
		<div style={{ width: '100%' }}>
			<LinearProgress />
			<Typography
				variant="h6"
				style={{ display: 'flex', justifyContent: 'center' }}
			>
				Armadillos are searching for your products..
			</Typography>
			<LinearProgress />
		</div>
	);
};

export default Loader;
