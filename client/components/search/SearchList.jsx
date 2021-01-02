import React from 'react';
import SearchCard from './SearchCard';
import { v4 as uuidv4 } from 'uuid';
import { Typography, Button, Divider } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from '../../style/theme';

const SearchList = ({
	results,
	addProduct,
	clearResults,
	startSpinner,
	setOpen,
}) => {
	const date = new Date().toDateString().slice(4, 16);
	const classes = useStyles();

	const handleClose = () => {
		setOpen(false);
		clearResults();
	};

	const resultList = results.map(({ title, image, link, merchant, price }) => (
		<>
			<SearchCard
				productId={uuidv4()}
				key={uuidv4()}
				image={image}
				link={link}
				merchant={merchant}
				price={price}
				title={title}
				date={date}
				addProduct={addProduct}
				clearResults={clearResults}
				startSpinner={startSpinner}
			/>
			<Divider className={classes.productDivider} />
		</>
	));

	return (
		<div className={classes.searchList}>
			<Typography variant="h5">Search Results</Typography>
			<Divider className={classes.loginDivider} variant="middle" />
			{resultList}
			<Button
				onClick={handleClose}
				aria-label="close"
				variant="contained"
				color="secondary"
				startIcon={<CloseIcon />}
			>
				Close
			</Button>
		</div>
	);
};

export default SearchList;
