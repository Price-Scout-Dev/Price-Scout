import React, { useState, useEffect, useRef } from 'react';
import ProductList from './product/ProductList';
import Search from './search/Search';
import dummyB from '../components/dummyB/dummyB';
import { Grid } from '@material-ui/core';

const Main = ({ email, password, userId, getProduct }) => {
	const postObj = useRef({});
	const shouldDelete = useRef(false);

	const [list, setList] = useState([]);

	//add product to userList
	const addProduct = (stateObj) => {
		postObj.current.productUrl = stateObj.productUrl;
		postObj.current.userId = userId;
		setList([stateObj, ...list]);
	};

	//delete product from userList
	const deleteProduct = (productId) => {
		const newList = list.filter((item) => item.productId !== productId);
		setList(newList);
		shouldDelete.current = true;
	};

	//useEffect: cdm
	useEffect(() => {
		fetch(`/api/products/${userId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'Application/JSON',
			},
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setList(res);
			})
			.catch((err) => console.log('ERROR: ', err));
	}, [userId]);

	//useEffect: add product
	useEffect(() => {
		if (postObj.current.productUrl && postObj.current.userId) {
			//make POST request
			postObj.current.productUrl = '';
			postObj.current.userId = '';
		}
	}, [list]);

	//useEffect: delete product
	useEffect(() => {
		if (shouldDelete.current === false) return;
		//make DELETE request
		shouldDelete.current = false;
	}, [list]);

	return list ? (
		<>
			<h1>What up! {email}</h1>
			<Grid container justify="center">
				<Grid
					container
					item
					justify="center"
					xs={12}
					style={{ margin: '2rem 0' }}
				>
					<Search userId={userId} addProduct={addProduct} />
				</Grid>
				<Grid
					container
					item
					justify="center"
					align="center"
					spacing={4}
					xs={12}
					md={10}
					xl={9}
				>
					<ProductList list={list} deleteProduct={deleteProduct} />
				</Grid>
			</Grid>
		</>
	) : (
		<>
			<h1>What up! {email}</h1>
			<Search userId={userId} addProduct={addProduct} />
		</>
	);
};

export default Main;
