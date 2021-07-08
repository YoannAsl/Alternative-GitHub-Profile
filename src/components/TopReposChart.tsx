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
	max-width: 500px;
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
			<div>
				<Bar
					type='bar'
					data={data}
					height={300}
					width={300}
					options={{
						maintainAspectRatio: false,
						responsive: true,
						plugins: { legend: { display: false } },
					}}
				/>
			</div>
		</Container>
	);
};

export default TopReposChart;
