import React from 'react';
import SearchCard from './SearchCard';
import { v4 as uuidv4 } from 'uuid';

const SearchList = ({ results, addProduct, clearResults }) => {
	const resultList = results.map(
		({ title, id, image, link, merchant, price }) => (
			<SearchCard
				key={uuidv4()}
				image={image}
				link={link}
				merchant={merchant}
				price={price}
				title={title}
				addProduct={addProduct}
				clearResults={clearResults}
			/>
		)
	);

	return (
		<div>
			{resultList}
			<button onClick={() => clearResults()}>Search Again</button>
		</div>
	);
};

export default SearchList;
