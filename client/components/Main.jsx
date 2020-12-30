import React, { useState, useEffect, useRef } from 'react';
import ProductList from './product/ProductList';
import Search from './search/Search';
//import dummyB from '../components/dummyB/dummyB';
import { Grid } from '@material-ui/core';

const Main = ({ email, password, userId, getProduct }) => {
	const postObj = useRef({});
	const shouldDelete = useRef(false);

	const [list, setList] = useState([]);
	const [fetchProduct, setFetch] = useState(false);

	//add product to userList
	const addProduct = (stateObj) => {
		setFetch(true);
		postObj.current.productUrl = stateObj.productUrl;
		postObj.current.userId = userId;
	};

	//delete product from userList
	const deleteProduct = (productId) => {
		const newList = list.filter((item) => item.productId !== productId);
		setList(newList);
		shouldDelete.current = true;
	};

	//useEffect: cdm
	useEffect(() => {
		if (!userId) return;

		fetch(`/api/products/${userId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res.products);
				setList(res.products);
			})
			.catch((err) => {
				return console.log(err);
			});
	}, [userId]);

	//useEffect: add product
	useEffect(() => {
		if (!fetchProduct) return;

		const productUrl = postObj.current.productUrl;
		const userId = postObj.current.userId;

		//make POST request
		// fetch(`/api/products/${userId}`, {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify({ productUrl, userId }),
		// })
		// 	.then((res) => res.json())
		// 	.then(
		// 		({
		// 			product_name,
		// 			image_url,
		// 			google_url,
		// 			store_name,
		// 			lowest_daily_price,
		// 		}) => {
		// 			console.log(product_name, image_url, google_url, store_name);
		// 			const newProduct = {
		// 				productName: product_name,
		// 				imageUrl: image_url,
		// 				productUrl: google_url,
		// 				storeName: store_name,
		// 				productPrice: lowest_daily_price,
		// 			};
		// 			setList([newProduct, ...list]);
		// 		}
		// 	)
		// 	.catch((err) => console.log('main ue addProduct', err));

		postObj.current.productUrl = '';
		postObj.current.userId = '';
		setFetch(false);
	}, [fetchProduct]);

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
