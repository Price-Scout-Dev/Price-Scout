import React, { useState, useEffect } from 'react';
import ProductList from './product/ProductList';
import Search from './search/Search';
import dummyB from '../components/dummyB/dummyB';

const Main = ({ email, password }) => {
	const products = dummyB.products;

	const [list, setList] = useState(products);

	// const getProducts = (db) => {
	// 	setList(db);
	// };

	// cdm
	useEffect(() => {
		// fetch('/api/products/:userId', {
		// 	method: 'GET',
		// 	headers: {
		// 		'Content-Type': 'Application/JSON',
		// 	},
		// 	body: JSON.stringify({ email, password }),
		// })
		// 	.then((res) => res.json())
		// 	.then((res) => setList(res.TheList)) // res.body?
		// 	.catch((err) => console.log('ERROR: ', err));
		// setPassword(password);
		// console.log('i am products', products);
		// console.log('i am list BEFORE', list);
		// setList(products);
		console.log('i am list AFTER', list);
	}, []);

	useEffect(() => console.log(list), [list]);

	return list ? (
		<ProductList list={list} />
	) : (
		<>
			<h1>What up! {email}</h1>
			<h3>Search will be here</h3>
		</>
	);
};

export default Main;
