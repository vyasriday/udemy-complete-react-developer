import React from 'react';
import './Search.css';

const Search = (props) => {
	return (
		<input
			className='search'
			type='search'
			value={props.searchField}
			onChange={props.searchChangeHandler}
			placeholder={props.placeholder}
		/>
	);
};

export default Search;
