import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

ReactDOM.render(
	<React.StrictMode>
		<CssBaseline />
		<Router>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
