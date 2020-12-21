import React from 'react';

const ProductCard = ({
	productName,
	imageUrl,
	storeName,
	productPrice,
	id,
}) => {
	console.log(id);
	return (
		<div>
			<h4>I am productCard: {id}</h4>
			<h5>{productName}</h5>
			<img src={imageUrl} />
			<h5>${productPrice}</h5>
			<p>{storeName}</p>
		</div>
	);
};

export default ProductCard;
