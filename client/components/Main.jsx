import React, { useState, useEffect, useRef } from 'react';
import ProductList from './product/ProductList';
import Search from './search/Search';
import { Grid, AppBar, Button, IconButton } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

const Main = ({ email, password, userId }) => {
	const postObj = useRef({});

	//state
	const [list, setList] = useState([]);
	const [fetchProduct, setFetch] = useState(false);
	const [productId, setProductId] = useState(null);

	//fetch all products from db
	const getAllProducts = () => {
		fetch(`/api/products/${userId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then(({ products }) => setList(products))
			.catch((err) => console.log(err));
	};

	//add product to userList
	const addProduct = (stateObj) => {
		Object.assign(postObj.current, stateObj);
		setFetch(true);
	};

	//delete product from userList
	const deleteProduct = (productId) => setProductId(productId);

	//useEffect: cdm
	useEffect(() => {
		if (!userId) return;

		getAllProducts();
	}, [userId]);

	//useEffect: add product
	useEffect(() => {
		if (!fetchProduct) return;

		const google_url = postObj.current.productUrl;
		const product_name = postObj.current.productName;
		const image_url = postObj.current.imageUrl;
		const store_name = postObj.current.storeName;
		const lowest_daily_price = postObj.current.productPrice;
		const product_id = postObj.current.productId;
		const date = postObj.current.date;

		//make POST request
		fetch(`/api/products/${userId}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				google_url,
				userId,
				product_name,
				image_url,
				store_name,
				lowest_daily_price,
				product_id,
				date,
			}),
		})
			.then((res) => {
				console.log(res.body);
				getAllProducts();
			})
			.catch((err) => console.log('main ue addProduct', err));

		Object.getOwnPropertyNames(postObj.current).forEach(
			(property) => delete postObj.current[property]
		);
		setFetch(false);
	}, [fetchProduct]);

	//useEffect: delete product
	useEffect(() => {
		if (!productId) return;

		const product_id = productId;

		fetch(`/api/products/${userId}/${productId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ product_id }),
		})
			.then((res) => {
				console.log(res.body);
				getAllProducts();
			})
			.catch((err) => console.log('main ue addProduct', err));

		setProductId(null);
	}, [productId]);

	return list ? (
		<>
			{/* <AppBar>
				<IconButton edge="start" color="inherit">
					<AccountCircle />
					{email}
				</IconButton>
				<Button>Logout</Button>
			</AppBar> */}
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
