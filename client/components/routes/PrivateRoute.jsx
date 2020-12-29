import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={() => {
				console.log(rest.email);
				return rest.email ? <Component {...rest} /> : <Redirect to="/login" />;
			}}
		/>
	);
};

export default PrivateRoute;
