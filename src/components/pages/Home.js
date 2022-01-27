import axios from 'axios';
import { useState } from 'react';
import Search from '../users/Search';
import Alert from '../layout/Alert';
import UserList from '../users/UserList';
const Home = () => {
	const [loading, setLoading] = useState(false);
	const [users, setUsers] = useState([]);
	const [alert, setAlert] = useState(null);
	const [user, setUser] = useState([]);

	const getUser = async (username) => {
		setLoading(true);
		const client_id = 'd9308aacf8b204d361fd';
		const client_secret = '84969aeef73956f4ec9e8716d1840532802bb81b';
		setLoading(true);
		axios
			.get(
				`https://api.github.com/search/users/${username}&client_id=${client_id}&client_secret=${client_secret}`
			)
			.then((res) => {
				setUser(res.data);
				setLoading(false);
			});
	};

	const clearUsers = () => {
		setUsers([]);
		setLoading(false);
	};

	const setAlertMessage = (msg, type) => {
		setAlert({ msg: msg, type: type });
		setTimeout(() => {
			setAlert(null);
		}, 3000);
	};
	return (
		<>
			{alert !== null && <Alert alert={alert} />}
			<Search
				clearUsers={clearUsers}
				showClear={users.length > 0 ? true : false}
				setAlert={setAlertMessage}
			/>
			<UserList loading={loading} users={users} />
		</>
	);
};

export default Home;
