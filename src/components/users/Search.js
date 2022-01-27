import React, { useRef } from 'react';

const Search = (props) => {
	const searchInputRef = useRef();

	const searchUsers = (event) => {
		event.preventDefault();
		const enteredSearch = searchInputRef.current.value;
		if (enteredSearch === '') props.setAlert('Search cannot be empty', 'light');
		else {
			props.searchUsers(enteredSearch);
			searchInputRef.current.value = '';
		}
	};
	return (
		<div>
			<form className='form' onSubmit={searchUsers}>
				<input
					type='text'
					name='text'
					placeholder='Search Users...'
					ref={searchInputRef}
				/>
				<input
					type='submit'
					value='Search'
					className='btn btn-dark btn-block'
				/>
			</form>
			{props.showClear && (
				<button className='btn btn-light btn-block' onClick={props.clearUsers}>
					Clear
				</button>
			)}
		</div>
	);
};

export default Search;
