import React from 'react';
import ProductCard from './ProductCard';
import { v4 as uuidv4 } from 'uuid';

const ProductList = ({ list, deleteProduct }) => {
	console.log('list in ProductList.jsx', list);
	const productItems = list.map(
		({
			product_name,
			image_url,
			store_name,
			lowest_daily_price,
			product_id,
			timestamp,
		}) => {
			//wrap in Link for detail route, if so
			return (
				<ProductCard
					productId={product_id}
					key={uuidv4()}
					productName={product_name}
					imageUrl={image_url}
					storeName={store_name}
					productPrice={lowest_daily_price}
					deleteProduct={deleteProduct}
					timestamp={timestamp}
				/>
			);
		}
	);

	return <>{productItems}</>;
};

export default ProductList;
