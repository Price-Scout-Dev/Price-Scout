import React, { useState, useEffect, useRef } from 'react';
import ProductList from './product/ProductList';
import Search from './search/Search';
import dummyB from '../components/dummyB/dummyB';

const Main = ({ email, password, userId }) => {
	// const firstRender = useRef(true);
	//const id = useRef(userId);

	const postObj = useRef({});

	const [list, setList] = useState([]);

	//dummy get: fetch users data
	const getProducts = (db) => setList(db);

	//add product to userList
	const addProduct = (stateObj) => {
		console.log(list);
		postObj.current.productUrl = stateObj.productUrl;
		postObj.current.userId = userId;
		setList([...list, stateObj]);
	};

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

	//useEffect: list
	//add new productObj to db
	useEffect(() => {
		console.log(list);
		console.log(postObj.current);
		if (postObj.current.productUrl && postObj.current.userId) {
			console.log('passed use effect conditions');
			console.log('ADD THIS PRODUCT TO LIST', postObj);
			console.log('LIST', list);
		}
	}, [list]);

	return list ? (
		<>
			<Search userId={userId} addProduct={addProduct} />
			<ProductList list={list} />
		</>
	) : (
		<>
			<h1>What up! {email}</h1>
			<Search userId={userId} addProduct={addProduct} />
		</>
	);
};

export default Main;
