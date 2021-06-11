import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const User = () => {
	const params: { username: string } = useParams();
	const [repos, setRepos] = useState([]);

	useEffect(() => {
		const getUserInfos = async () => {
			const req = await axios.get(
				`https://api.github.com/users/${params.username}`
			);
			console.log(req.data);
		};
		getUserInfos();
	}, [params.username]);

	useEffect(() => {
		const getUserRepos = async () => {
			const req = await axios.get(
				`https://api.github.com/users/${params.username}/repos?per_page=100`
			);
			setRepos(req.data);
		};
		getUserRepos();
	}, [params.username]);

	return (
		<div>
			{repos.map((repo: any) => (
				<li key={repo.id}>{repo.name}</li>
			))}
		</div>
	);
};

export default User;
