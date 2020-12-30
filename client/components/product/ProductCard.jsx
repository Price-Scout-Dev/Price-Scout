import React from 'react';
import {
	Grid,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from '../../style/theme';

const ProductCard = ({
	productName,
	imageUrl,
	storeName,
	productPrice,
	productId,
	deleteProduct,
	timestamp,
}) => {
	const handleClick = () => {
		deleteProduct(productId);
	};

	const classes = useStyles();

	return (
		<Grid item xs={12} sm={6} md={4} lg={3}>
			<Card className={classes.productCard}>
				<CardActionArea>
					<CardMedia
						className={classes.productCardMedia}
						image={imageUrl}
						title={productName}
					/>
				</CardActionArea>
				<CardContent>
					<Typography variant="h5">Product: {productName}</Typography>
					<h5>${productPrice}</h5>
					<p>Retailer: {storeName}</p>
					<h6>id: {productId}</h6>
					<h6>{timestamp}</h6>
				</CardContent>
				<CardActions>
					<Button
						onClick={handleClick}
						variant="contained"
						color="secondary"
						size="small"
						startIcon={<DeleteIcon />}
						style={{ margin: '0 auto' }}
					>
						Delete
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default ProductCard;
