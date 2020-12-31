import React, { useState, useEffect, useRef } from 'react';
import ProductList from './product/ProductList';
import Search from './search/Search';
import { Grid, AppBar, Button, IconButton, Toolbar } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

const Main = ({ email, password, userId }) => {
	const postObj = useRef({});
	const shouldDelete = useRef(false);

	//state
	const [list, setList] = useState([]);
	const [fetchProduct, setFetch] = useState(false);

	//add product to userList
	const addProduct = (stateObj) => {
		postObj.current.productUrl = stateObj.productUrl;
		postObj.current.userId = userId;
		setFetch(true);
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
			.then(({ products }) => setList(products))
			.catch((err) => console.log(err));
	}, [userId]);

	//useEffect: add product
	useEffect(() => {
		if (!fetchProduct) return;

		const google_url = postObj.current.productUrl;
		const userId = postObj.current.userId;

		console.log('main ue fetch', google_url, userId);

		//make POST request
		fetch(`/api/products/${userId}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ google_url, userId }),
		})
			.then((res) => res.json())
			.then(({ product_name, image_url, store_name, lowest_daily_price }) => {
				console.log('LINE 63');
				console.log(
					'main ue fetch in post',
					product_name,
					image_url,
					store_name,
					lowest_daily_price
				);
				const newProduct = {
					productName: product_name,
					imageUrl: image_url,
					storeName: store_name,
					productPrice: lowest_daily_price,
				};
				setList([newProduct, ...list]);
			})
			.catch((err) => console.log('main ue addProduct', err));

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
			<AppBar>
				<Toolbar>
					<IconButton edge="start" color="inherit">
						<AccountCircle />
						{email}
					</IconButton>
					<Button color="inherit">Logout</Button>
				</Toolbar>
			</AppBar>
			<Grid container justify="center" style={{ marginTop: 64 }}>
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
