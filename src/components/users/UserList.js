import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const UserList = ({ loading, users }) => {
	if (loading) return <Spinner />;
	else {
		return (
			<div style={userStyle}>
				{users.map((user) => (
					<UserItem key={user.id} user={user} />
				))}
			</div>
		);
	}
};

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem',
};

export default UserList;
