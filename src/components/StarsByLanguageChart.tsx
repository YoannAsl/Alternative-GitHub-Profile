import { Pie } from 'react-chartjs-2';
import languageColors from './../languageColors';

interface Props {
	repos: any[];
}

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
		<div style={{ height: '300px', width: '300px' }}>
			<Pie type='pie' data={data} />
		</div>
	);
};

export default StarsByLanguageChart;
