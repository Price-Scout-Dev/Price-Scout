import React, { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

const Spinner = () => {
	return (
		<div>
			<LinearProgress color="primary" />
			<h3>Armadillos are tracking your products</h3>
			<LinearProgress color="primary" />
		</div>
	);
};

export default Spinner;
