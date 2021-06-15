import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import GhPoliglot from 'gh-polyglot';

import LanguagesChart from './LanguagesChart';
import TopReposChart from './TopReposChart';
import UserInfos from './UserInfos';
import TopReposList from './TopReposList';

const User = () => {
	const params: { username: string } = useParams();

	const [user, setUser] = useState([]);
	const [repos, setRepos] = useState([]);
	const [languages, setLanguages] = useState([]);

	// Gets user infos
	useEffect(() => {
		const getUserInfos = async () => {
			try {
				const req = await axios.get(
					`https://api.github.com/users/${params.username}`
				);
				setUser(req.data);

				console.log(req.data);
			} catch (error) {
				console.error(error);
			}
		};
		getUserInfos();
	}, [params.username]);

	// Gets user repositories
	useEffect(() => {
		const getUserRepos = async () => {
			try {
				const req = await axios.get(
					`https://api.github.com/users/${params.username}/repos?per_page=100`
				);
				setRepos(req.data);

				console.log(req.data);
			} catch (error) {
				console.error(error);
			}
		};
		getUserRepos();
	}, [params.username]);

	// Gets languages used by user
	useEffect(() => {
		const me = new GhPoliglot(`${params.username}`);
		me.userStats((err: any, stats: any) => {
			if (err) console.error('Error', err);
			setLanguages(stats);
		});
	}, [params.username]);

	return (
		<div>
			<UserInfos user={user} />
			<LanguagesChart languages={languages} />
			<TopReposChart repos={repos} />
			<TopReposList repos={repos} />
		</div>
	);
};

export default User;
