import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ list }) => {
	const productItems = list.map(
		({ productName, imageUrl, storeName, productPrice }) => {
			//wrap in Link for detail route, if so
			return (
				<>
					<ProductCard
						key={Math.floor(Math.random() * 10000)}
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
			<h4>i am ProductList</h4>
			<div>{productItems}</div>
		</div>
	);
};

export default ProductList;
