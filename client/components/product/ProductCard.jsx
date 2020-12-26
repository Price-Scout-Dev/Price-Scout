import React from 'react';
import { Grid, Card } from '@material-ui/core';

const ProductCard = ({
	productName,
	imageUrl,
	storeName,
	productPrice,
	productId,
	deleteProduct,
	date,
}) => {
	const handleClick = () => {
		deleteProduct(productId);
	};

	return (
		<Grid item xs={12} sm={6} md={4} lg={3}>
			<Card>
				<h4>Product: {productName}</h4>
				<img src={imageUrl} />
				<h5>${productPrice}</h5>
				<p>Retailer: {storeName}</p>
				<h6>id: {productId}</h6>
				<button onClick={handleClick}>Stop Tracking</button>
			</Card>
		</Grid>
	);
};

export default ProductCard;
