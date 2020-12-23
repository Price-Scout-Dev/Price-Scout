import React, { useState, useEffect, useRef } from 'react';
import ProductList from './product/ProductList';
import Search from './search/Search';
import dummyB from '../components/dummyB/dummyB';

const Main = ({ email, password, userId, getProduct }) => {
	const postObj = useRef({});
	const shouldDelete = useRef(false);

	const [list, setList] = useState([]);

	//add product to userList
	const addProduct = (stateObj) => {
		postObj.current.productUrl = stateObj.productUrl;
		postObj.current.userId = userId;
		setList([...list, stateObj]);
	};

	//delete product from userList
	const deleteProduct = (productName) => {
		console.log('list before delete:', list);
		console.log('deleteProduct productName', productName);
		const newList = list.filter((item) => item.productName !== productName);
		console.log('list after delete:', newList);
		setList(newList);
		shouldDelete.current = true;
	};

	//useEffect: cdm
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
		setList(dummyB.products);
	}, []);

	//useEffect: add product
	useEffect(() => {
		if (postObj.current.productUrl && postObj.current.userId) {
			//make POST request
			console.log('passed use effect conditions');
			console.log('ADD THIS PRODUCT TO LIST', postObj);
			console.log('LIST', list);
			postObj.current.productUrl = '';
			postObj.current.userId = '';
		}
	}, [list]);

	//useEffect: delete product
	useEffect(() => {
		if (shouldDelete.current === false) return;
		//make DELETE request
		console.log('Delete useEffect ran, list =', list);
		shouldDelete.current = false;
	}, [list]);

	return list ? (
		<>
			<Search userId={userId} addProduct={addProduct} />
			<ProductList list={list} deleteProduct={deleteProduct} />
		</>
	) : (
		<>
			<h1>What up! {email}</h1>
			<Search userId={userId} addProduct={addProduct} />
		</>
	);
};

export default Main;
