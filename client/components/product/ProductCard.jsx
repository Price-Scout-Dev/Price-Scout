import React from 'react';

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
		<div>
			<h6>{date}</h6>
			<h4>Product: {productName}</h4>
			<img src={imageUrl} />
			<h5>${productPrice}</h5>
			<p>Retailer: {storeName}</p>
			<h6>id: {productId}</h6>
			<button onClick={handleClick}>Stop Tracking</button>
		</div>
	);
};

export default ProductCard;
