import React from 'react';
import Login from '../auth/Login';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ loginUser, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={() => {
				return rest.email ? (
					<Component {...rest} />
				) : (
					<Login loginUser={loginUser} />
				);
			}}
		/>
	);
};

export default PrivateRoute;
