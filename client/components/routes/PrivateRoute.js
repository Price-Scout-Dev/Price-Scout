import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
	console.log(rest);
	return (
		<Route
			{...rest}
			render={() =>
				rest.email ? <Component {...rest} /> : <Redirect to="/login" />
			}
		/>
	);
};

export default PrivateRoute;
