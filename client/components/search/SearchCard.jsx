import React from 'react';

const SearchCard = ({
	title,
	id,
	image,
	link,
	merchant,
	price,
	addProduct,
	clearResults,
}) => {
	const stateObj = {
		productName: title,
		imageUrl: image,
		productUrl: link,
		storeName: merchant,
		productPrice: price,
	};
	return (
		<div>
			<h4>Product: {title}</h4>
			<img src={image} />
			<h5>${price}</h5>
			<h5>Retailer: {merchant}</h5>
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
