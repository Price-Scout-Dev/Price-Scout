import React from 'react';

const SearchCard = ({ title, id, image, link, merchant, price }) => {
	return (
		<div>
			<h3>I AM SEARCH CARD</h3>
			<h3>{title}</h3>
			<img src={image} />
			<h5>{merchant}</h5>
			<h4>{price}</h4>
			<p>{link}</p>
		</div>
	);
};

export default SearchCard;
