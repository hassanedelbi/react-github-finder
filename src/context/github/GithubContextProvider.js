import axios from 'axios';
import React, { useReducer, createContext } from 'react';
import GithubReducer from './GithubReducer';

import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER } from '../types';
import GithubContext from './GithubContext';

const GithubContextProvider = (props) => {
	const initialState = {
		users: [],
		user: {},
		loading: false,
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

	const searchUsers = async (enteredSearch) => {
		setLoading();
		const client_id = 'd9308aacf8b204d361fd';
		const client_secret = '84969aeef73956f4ec9e8716d1840532802bb81b';
		const res = await axios.get(
			`https://api.github.com/search/users?q=${enteredSearch}&client_id=${client_id}&client_secret=${client_secret}`
		);
		dispatch({
			type: SEARCH_USERS,
			payload: res.data.items,
		});
	};
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				loading: state.loading,
				searchUsers,
			}}
		>
			{props.children}
		</GithubContext.Provider>
	);
};

export default GithubContextProvider;
