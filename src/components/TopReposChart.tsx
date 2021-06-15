import { Bar } from 'react-chartjs-2';

interface Props {
	repos: any[];
}

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
		<div style={{ height: '300px', width: '300px' }}>
			<Bar
				type='bar'
				data={data}
				options={{
					plugins: { legend: { display: false } },
				}}
			/>
		</div>
	);
};

export default TopReposChart;
