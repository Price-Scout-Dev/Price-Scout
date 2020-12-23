import React from 'react';

const ProductCard = ({
	productName,
	imageUrl,
	storeName,
	productPrice,
	id,
	deleteProduct,
}) => {
	const handleClick = () => {
		console.log('card click: heard');
		console.log(productName);
		deleteProduct(productName);
	};

	return (
		<div>
			<h4>Product: {productName}</h4>
			<img src={imageUrl} />
			<h5>${productPrice}</h5>
			<p>Retailer: {storeName}</p>
			<h6>id: {id}</h6>
			<button onClick={handleClick}>Stop Tracking</button>
		</div>
	);
};

export default ProductCard;
