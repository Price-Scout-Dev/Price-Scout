import React from 'react';

const ProductCard = ({
	productName,
	imageUrl,
	storeName,
	productPrice,
	id,
}) => {
	return (
		<div>
			<h4>Product: {productName}</h4>
			<img src={imageUrl} />
			<h5>${productPrice}</h5>
			<p>Retailer: {storeName}</p>
		</div>
	);
};

export default ProductCard;
