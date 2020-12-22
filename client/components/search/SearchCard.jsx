import React from 'react';

const SearchCard = ({
	title,
	id,
	image,
	link,
	merchant,
	price,
	addProduct,
}) => {
	// const handleClick

	return (
		<div>
			<h3>I AM SEARCH CARD</h3>
			<h3>{title}</h3>
			<img src={image} />
			<h5>{merchant}</h5>
			<h4>{price}</h4>
			<p>{link}</p>
			<button onClick={() => handleClick}>Track Me!</button>
		</div>
	);
};

export default SearchCard;
