import React, { useState, useEffect, useRef } from 'react';
import useInput from '../hooks/useInput';
import SearchList from './SearchList';
import useToggler from '../hooks/useToggler';
import Loader from './Loader';

const Search = ({ userId, addProduct, idx }) => {
	const firstRender = useRef(true);

	const [searchVal, handleSearchVal, resetSearch] = useInput('');
	const [results, setResults] = useState([]);
	const [isFetching, toggler] = useToggler(false);

	const handleSubmit = (e) => {
		e.preventDefault();

		toggler();

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
		if (results.length < 1) return; // maybe render a component for no products
		toggler();
		console.log(results, 'UPDATED STATE WITH FETCH');
	}, [results]);

	if (isFetching) return <Loader />;

	return results.length > 0 ? (
		<SearchList
			results={results}
			clearResults={clearResults}
			addProduct={addProduct}
			idx={idx}
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
