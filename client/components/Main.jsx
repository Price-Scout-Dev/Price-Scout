import React, { useState, useEffect, useRef } from 'react';
import ProductList from './product/ProductList';
import Search from './search/Search';
import dummyB from '../components/dummyB/dummyB';

const Main = ({ email, password }) => {
	const [list, setList] = useState([]);

	//feth dummy data
	const getProducts = (db) => setList(db);

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
		getProducts(dummyB.products);
	}, []);

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
