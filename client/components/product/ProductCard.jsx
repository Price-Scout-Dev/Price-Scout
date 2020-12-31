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
	date,
}) => {
	const handleClick = () => {
		deleteProduct(productId);
	};

	const classes = useStyles();

	return (
		<Grid item xs={12} sm={6} md={4} lg={3}>
			<Card className={classes.productCard}>
				<CardActionArea style={{ height: 300 }}>
					<CardMedia
						className={classes.productCardMedia}
						image={imageUrl}
						title={productName}
					/>
				</CardActionArea>
				<CardContent>
					<Typography variant="h6">{productName}</Typography>
					<Typography variant="h4" color="primary">
						${productPrice}
					</Typography>
					<Typography variant="subtitle1">{storeName}</Typography>
					<Typography variant="overline">Id: {productId}</Typography>
					<Typography variant="caption">Date Added: {date}</Typography>
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
