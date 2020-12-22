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
			<h3>I AM SEARCH CARD</h3>
			<h3>{title}</h3>
			<img src={image} />
			<h5>{merchant}</h5>
			<h4>{price}</h4>
			<p>{link}</p>
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
