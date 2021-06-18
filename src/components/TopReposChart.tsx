import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

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

const TopReposChart = ({ repos }: Props) => {
	const sortBy = 'stargazers_count';
	const mostStarredRepos = repos
		.filter((repo) => !repo.fork)
		.sort((a, b) => b[sortBy] - a[sortBy])
		.splice(0, 5);

	const data = {
		labels: mostStarredRepos.map((repo) => repo.name),
		datasets: [
			{
				data: mostStarredRepos.map((repo) => repo[sortBy]),
				backgroundColor: ['#ff6f6fac'],
			},
		],
	};

	return (
		<Container>
			<header>
				<h1>Most Starred</h1>
			</header>
			<Bar
				type='bar'
				data={data}
				options={{
					plugins: { legend: { display: false } },
				}}
			/>
		</Container>
	);
};

export default TopReposChart;
