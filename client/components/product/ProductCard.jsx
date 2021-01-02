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
	storeUrl,
}) => {
	const handleClick = () => {
		deleteProduct(productId);
	};

	const classes = useStyles();

	return (
		<Grid item xs={12} sm={6} md={4} lg={3}>
			<Card
				className={classes.productCard}
				style={{
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<CardActionArea style={{ height: 300 }}>
					<CardMedia
						className={classes.productCardMedia}
						image={imageUrl}
						title={productName}
					/>
				</CardActionArea>
				<CardContent style={{ flexGrow: 1 }}>
					<Typography variant="h6">{productName}</Typography>
					<Typography
						className={classes.productPrice}
						variant="h4"
						color="primary"
					>
						${productPrice}
					</Typography>
					<Typography variant="subtitle1">
						<a href={storeUrl} target="_blank">
							{storeName}
						</a>
					</Typography>
					<Typography variant="overline" display="block">
						Id: {productId}
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						onClick={handleClick}
						variant="contained"
						color="secondary"
						size="small"
						startIcon={<DeleteIcon />}
						style={{ flexGrow: 1 }}
					>
						Delete
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default ProductCard;
