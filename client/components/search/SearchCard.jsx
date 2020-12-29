import React from 'react';

const SearchCard = ({
	title,
	image,
	link,
	merchant,
	price,
	addProduct,
	clearResults,
	productId,
	date,
}) => {
	const stateObj = {
		productName: title,
		imageUrl: image,
		productUrl: link,
		storeName: merchant,
		productPrice: price,
		productId,
		date,
	};
	return (
		<div>
			<h6>{date}</h6>
			<h4>Product: {title}</h4>
			<img src={image} />
			<h5>${price}</h5>
			<h5>Retailer: {merchant}</h5>
			<h6>id: {productId}</h6>
			<button
				onClick={() => {
					addProduct(stateObj);
					clearResults();
				}}
			>
				Track Me!
			</button>
		</div>
	);
};

export default SearchCard;
