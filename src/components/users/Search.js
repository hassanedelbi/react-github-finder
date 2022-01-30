import React, { useContext, useRef } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import GithubContext from '../../context/github/GithubContext';

const Search = () => {
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);
	const searchInputRef = useRef();

	const searchUsers = (event) => {
		event.preventDefault();
		const enteredSearch = searchInputRef.current.value;
		if (enteredSearch === '')
			alertContext.setAlert('Search cannot be empty', 'light');
		else {
			githubContext.searchUsers(enteredSearch);
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
			{githubContext.users.length > 0 && (
				<button
					className='btn btn-light btn-block'
					onClick={githubContext.clearUsers}
				>
					Clear
				</button>
			)}
		</div>
	);
};

export default Search;
