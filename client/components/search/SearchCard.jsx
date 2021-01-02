import React from 'react';
import { Typography, Button } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

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
	startSpinner,
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

	const handleClick = () => {
		addProduct(stateObj);
		startSpinner();
		clearResults();
	};

	return (
		<>
			<img src={image} alt={title} />
			<Typography variant="caption" display="block">
				{date}
			</Typography>
			<Typography variant="h6">{title}</Typography>
			<Typography variant="h4" color="primary">
				${price}
			</Typography>
			<Typography variant="subtitle1">{merchant}</Typography>
			<Typography variant="overline" display="block">
				Id: {productId}
			</Typography>
			<Button
				onClick={handleClick}
				variant="contained"
				color="primary"
				style={{ margin: '0 auto' }}
				startIcon={<AddCircleOutlineIcon />}
			>
				Add Product
			</Button>
		</>
	);
};

export default SearchCard;
