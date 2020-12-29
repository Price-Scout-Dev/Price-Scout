import React, { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';

const Loader = () => {
	return (
		<div>
			<LinearProgress color="secondary" />
			<h3>Armadillos are gathering your products</h3>
			<LinearProgress color="secondary" />
		</div>
	);
};

export default Loader;
