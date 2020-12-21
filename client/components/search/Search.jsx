import React from 'react';
import useInput from '../hooks/useInput';

const Search = ({ userId, addProduct }) => {
	const [searchVal, handleSearchVal, resetSearch] = useInput('');

	const handleSubmit = (e) => {
		e.preventDefault();

		//really send as a post to db;
		console.log(userId, searchVal);

		//call with response values
		addProduct({
			productName: searchVal,
			imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
			storeName: 'Some_Store',
			productPrice: 500,
		});

		resetSearch();
	};

	return (
		<div>
			<p>i am search</p>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={searchVal}
					onChange={handleSearchVal}
					placeholder="product url"
				/>
			</form>
		</div>
	);
};

export default Search;
