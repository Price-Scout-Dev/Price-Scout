import React, { useState, useEffect } from 'react';
import ProductList from './product/ProductList';
import Search from './search/Search';

const Main = ({ email, password }) => {
	console.log(email, password);

	const [list, setList] = useState([]);

	const searchProducts = () => {
		console.log('hi');
	};

	//cdm
	// useEffect(() => {
	// 	fetch('/api/products/:userId', {
	// 		method: 'GET',
	// 		headers: {
	// 			'Content-Type': 'Application/JSON',
	// 		},
	// 		body: JSON.stringify({ email, password }),
	// 	})
	// 		.then((res) => res.json())
	// 		.then((res) => setList(res.TheList)) // res.body?
	// 		.catch((err) => console.log('ERROR: ', err));
	// 	setPassword(password);
	// }, []);

	return (
		<>
			<h1>What up! {email}</h1>
			<h3>Search will be here</h3>
			<ProductList list={list} />
		</>
	);
};

export default Main;
