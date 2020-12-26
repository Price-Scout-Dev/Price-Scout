import React, { useState, useEffect, useRef } from 'react';
import useInput from '../hooks/useInput';
import SearchList from './SearchList';
import useToggler from '../hooks/useToggler';
import Loader from './Loader';
import { Button, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const Search = ({ userId, addProduct }) => {
	const firstRender = useRef(true);

	const [searchVal, handleSearchVal, resetSearch] = useInput('');
	const [results, setResults] = useState([]);
	const [isFetching, toggler] = useToggler(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!searchVal) return alert('Please write an input in the search bar!');

		toggler();

		fetch(
			`https://api.scaleserp.com/search?search_type=shopping&price_low_to_high&num=10&api_key=6ADC56D9A9074C4ABD404FA9E55F6DC7&q=${searchVal}`
		)
			.then((response) => response.json())
			.then((response) => {
				setResults(response.shopping_results.slice(0, 10));
				firstRender.current = false;
			})
			.catch((err) => console.log(err));

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
		/>
	) : (
		<>
			<form onSubmit={handleSubmit}>
				<TextField
					variant="outlined"
					label="Search for a product.."
					value={searchVal}
					onChange={handleSearchVal}
				/>
			</form>
			<Button
				variant="contained"
				color="primary"
				onClick={handleSubmit}
				endIcon={<SearchIcon />}
			>
				Search
			</Button>
		</>
	);
};

export default Search;
