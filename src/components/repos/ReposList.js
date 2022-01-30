import React from 'react';
import RepoItem from './RepoItem';

const ReposList = ({ repos }) => {
	return repos.map((repo) => <RepoItem repo={repo} key={repo.id} />);
};
export default ReposList;
