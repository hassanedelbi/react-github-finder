import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_USER } from '../types';

const GithubReducer = (state, action) => {
	switch (action.type) {
		case SEARCH_USERS:
			return {
				...state,
				users: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};
export default GithubReducer;
