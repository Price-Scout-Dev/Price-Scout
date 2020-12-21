import React from 'react';

const ProductList = ({ list }) => {
	const productItems = list.map(
		({ productName, imageUrl, storeName, productPrice }) => {
			//wrap in Link here to route to detail page if desired
			return (
				<>
					<h4>I am productList</h4>
					<productItem
						// key={uuid()}
						productName={productName}
						image={imageUrl}
						storeName={storeName}
						productPrice={productPrice}
					/>
				</>
			);
		}
	);

	return <div>{productItems};</div>;
};

export default ProductList;
