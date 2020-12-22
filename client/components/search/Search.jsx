import React, { useState, useEffect, useRef } from 'react';
import useInput from '../hooks/useInput';
import SearchList from './SearchList';

const Search = ({ userId, addProduct }) => {
	const firstRender = useRef(true);

	const [searchVal, handleSearchVal, resetSearch] = useInput('');
	const [results, setResults] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch(
			`https://api.scaleserp.com/search?search_type=shopping&price_low_to_high&num=10&api_key=045857B48E1A47C29E29DEE7BA20CCF8&q=${searchVal}`
		)
			.then((response) => response.json())
			.then((response) => {
				setResults(response.shopping_results.slice(0, 10));
				firstRender.current = false;
			});

		resetSearch();
	};

	const clearResults = () => setResults([]);

	useEffect(() => {
		if (firstRender.current) return;
		if (results.length < 1) return;
		console.log(results, 'UPDATED STATE WITH FETCH');
	}, [results]);

	return results.length > 0 ? (
		<SearchList
			results={results}
			clearResults={clearResults}
			addProduct={addProduct}
		/>
	) : (
		<div>
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
