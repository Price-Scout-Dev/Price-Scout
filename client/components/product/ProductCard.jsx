import React from 'react';

const ProductCard = ({ productName, imageUrl, storeName, productPrice }) => {
	return (
		<div>
			<h3>I am productCard</h3>
			<h2>{productName}</h2>
			<img src={imageUrl} />
			<h6>{productPrice}</h6>
			<p>{storeName}</p>
		</div>
	);
};

export default ProductCard;
