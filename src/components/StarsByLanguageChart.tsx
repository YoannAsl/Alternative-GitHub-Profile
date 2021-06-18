import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';

import languageColors from './../languageColors';

interface Props {
	repos: any[];
}

const Container = styled.div`
	background-color: white;
	padding: 2rem 1rem;
	border-radius: 5px;
	box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
	h1 {
		margin: 0;
	}
`;

const StarsByLanguageChart = ({ repos }: Props) => {
	const filteredRepos = repos.filter(
		(repo) => !repo.fork && repo.stargazers_count > 0 && repo.language
	);
	const uniqueLanguages = new Set(filteredRepos.map((repo) => repo.language));
	const labels: string[] = Array.from(uniqueLanguages.values());

	const data = {
		labels,
		datasets: [
			{
				data: labels.map((lang) => {
					const repos = filteredRepos.filter(
						(repo) => repo.language === lang
					);
					const starsArray = repos.map(
						(repo) => repo.stargazers_count
					);
					const starsSum = starsArray.reduce((a, b) => a + b);
					return starsSum;
				}),
				backgroundColor: labels.map((label) => languageColors[label]),
			},
		],
	};

	return (
		<Container>
			<header>
				<h1>Stars per Language</h1>
			</header>
			<Doughnut type='pie' data={data} />
		</Container>
	);
};

export default StarsByLanguageChart;
