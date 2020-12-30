import React from 'react';
import Login from '../auth/Login';
import { Route } from 'react-router-dom';

const PrivateRoute = ({
	loginUser,
	registerUser,
	component: Component,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={() => {
				return rest.email ? (
					<Component {...rest} />
				) : (
					<Login registerUser={registerUser} loginUser={loginUser} />
				);
			}}
		/>
	);
};

export default PrivateRoute;
