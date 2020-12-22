import React, { useState, useEffect } from 'react';
import useInput from '../hooks/useInput';
import SearchList from './SearchList';

const Search = ({ userId, addProduct }) => {
	const [searchVal, handleSearchVal, resetSearch] = useInput('');
	const [results, setResults] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch(
			`https://api.scaleserp.com/search?search_type=shopping&price_low_to_high&num=10&api_key=045857B48E1A47C29E29DEE7BA20CCF8&q=${searchVal}`
		)
			.then((response) => response.json())
			.then((response) => {
				setResults(response.shopping_results.slice(0, 11));
			});

		resetSearch();
	};

	useEffect(() => console.log(results, 'UPDATED STATE WITH FETCH'), [results]);

	return results.length > 0 ? (
		<>
			<SearchList results={results} addProduct={addProduct} />
			<h1>{results.length}</h1>
		</>
	) : (
		<div>
			<h1>{results.length}</h1>
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
