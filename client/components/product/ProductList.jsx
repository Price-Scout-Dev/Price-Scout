import React from 'react';
import ProductCard from './ProductCard';
import { v4 as uuidv4 } from 'uuid';

const ProductList = ({ list, deleteProduct }) => {
	const productItems = list.map(
		({ productName, imageUrl, storeName, productPrice, productId, date }) => {
			//wrap in Link for detail route, if so
			return (
				<ProductCard
					productId={productId}
					key={uuidv4()}
					productName={productName}
					imageUrl={imageUrl}
					storeName={storeName}
					productPrice={productPrice}
					deleteProduct={deleteProduct}
				/>
			);
		}
	);

	return <>{productItems}</>;
};

export default ProductList;
