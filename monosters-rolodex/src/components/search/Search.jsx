import React from 'react';

const Search = (props) => {
	return (
		<input
			type='search'
			value={props.searchField}
			onChange={props.searchChangeHandler}
		/>
	);
};

export default Search;
