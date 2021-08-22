import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import GhPoliglot from 'gh-polyglot';
import styled from 'styled-components';

import LanguagesChart from '../components/LanguagesChart';
import TopReposChart from '../components/TopReposChart';
import UserInfos from '../components/UserInfos';
import TopReposList from '../components/TopReposList';
import StarsByLanguageChart from '../components/StarsByLanguageChart';

const UserPage = () => {
	const params: { username: string } = useParams();

	const [user, setUser] = useState({});
	const [repos, setRepos] = useState([]);
	const [languages, setLanguages] = useState([]);
	// console.log(repos);

	// Gets user infos
	useEffect(() => {
		const getUserInfos = async () => {
			try {
				const req = await axios.get(
					`https://api.github.com/users/${params.username}`
				);
				setUser(req.data);
			} catch (error) {
				console.error(error);
			}
		};
		getUserInfos();
	}, [params.username]);

	// Gets user repositories
	useEffect(() => {
		// axios
		// 	.get(
		// 		`https://api.github.com/users/${params.username}/repos?per_page=100`
		// 	)
		// 	.then((res) => setRepos(res.data))
		// 	.catch((err) => console.error(err));

		const getUserRepos = async () => {
			try {
				const req = await axios.get(
					`https://api.github.com/users/${params.username}/repos?per_page=100`
				);
				setRepos(req.data);
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

			console.log(stats);
		});
	}, [params.username]);

	return (
		<main>
			<UserInfos user={user} />
			<Container>
				<ChartsContainer>
					<LanguagesChart languages={languages} />
					<TopReposChart repos={repos} />
					<StarsByLanguageChart repos={repos} />
				</ChartsContainer>
				<TopReposList repos={repos} />
			</Container>
		</main>
	);
};

const Container = styled.div`
	background-color: rgb(246, 248, 250);
	padding: 1rem;
`;

const ChartsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
	gap: 2rem;
	justify-items: center;
	max-width: 1200px;
	padding: 1rem;
	margin-top: -9rem;
`;

export default UserPage;
