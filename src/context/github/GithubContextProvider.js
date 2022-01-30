import axios from 'axios';
import React, { useReducer, createContext } from 'react';
import GithubReducer from './GithubReducer';
import GithubContext from './GithubContext';
import {
	SEARCH_USERS,
	SET_LOADING,
	CLEAR_USERS,
	GET_USER,
	GET_REPOS,
} from '../types';

const GithubContextProvider = (props) => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	const client_id = 'd9308aacf8b204d361fd';
	const client_secret = '84969aeef73956f4ec9e8716d1840532802bb81b';

	const searchUsers = async (enteredSearch) => {
		setLoading();

		const res = await axios.get(
			`https://api.github.com/search/users?q=${enteredSearch}&client_id=${client_id}&client_secret=${client_secret}`
		);
		dispatch({
			type: SEARCH_USERS,
			payload: res.data.items,
		});
	};

	const getUser = async (username) => {
		setLoading();
		axios.get(`https://api.github.com/users/${username}`).then((res) => {
			dispatch({
				type: GET_USER,
				payload: res.data,
			});
		});
	};

	const getUserRepos = async (username) => {
		setLoading();

		const res = await axios.get(
			`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${client_id}&client_secret=${client_secret}`
		);

		dispatch({
			type: GET_REPOS,
			payload: res.data,
		});
	};

	const setLoading = () => dispatch({ type: SET_LOADING });

	const clearUsers = () => {
		dispatch({ type: CLEAR_USERS });
	};
	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
				searchUsers,
				clearUsers,
				getUser,
				getUserRepos,
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubContextProvider;
