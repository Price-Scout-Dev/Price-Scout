import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ list }) => {
	const productItems = list.map(
		({ productName, imageUrl, storeName, productPrice }) => {
			//wrap in Link for detail route, if so
			const genId = Math.floor(Math.random() * 10000);
			return (
				<>
					<ProductCard
						id={genId}
						key={genId}
						productName={productName}
						imageUrl={imageUrl}
						storeName={storeName}
						productPrice={productPrice}
					/>
				</>
			);
		}
	);

	return (
		<div>
			<h2>i am ProductList</h2>
			<div>{productItems}</div>
		</div>
	);
};

export default ProductList;
