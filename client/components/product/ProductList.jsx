import React from 'react';
import ProductCard from './ProductCard';
import { v4 as uuidv4 } from 'uuid';

const ProductList = ({ list, deleteProduct }) => {
	const productItems = list.map(
		({ productName, imageUrl, storeName, productPrice }, i) => {
			//wrap in Link for detail route, if so
			return (
				<>
					<ProductCard
						id={i}
						key={uuidv4()}
						productName={productName}
						imageUrl={imageUrl}
						storeName={storeName}
						productPrice={productPrice}
						deleteProduct={deleteProduct}
					/>
				</>
			);
		}
	);

	return (
		<div>
			<div>{productItems}</div>
		</div>
	);
};

export default ProductList;
