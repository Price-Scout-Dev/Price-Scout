import React from 'react';
import AboutNavBar from './AboutNavBar';
import LogInNavBar from './LogInNavBar';
import RegNavBar from './RegNavBar';
import { Link } from 'react-router-dom';

const NavBar = ({ match }) => {
	// if (match.params === 'login') return (
	//   <>
	//     <AboutNavBar />
	//     <RegNavBar />
	//   </>
	// )

	// if (match.params === 'about') return (
	//   <>
	//     <AboutNavBar />
	//     <LogInNavBar />
	//   </>
	// )

	return (
		<>
			<AboutNavBar />
			<LogInNavBar />
		</>
	);
};

export default NavBar;
