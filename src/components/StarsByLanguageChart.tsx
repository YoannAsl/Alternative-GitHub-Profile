import { Pie } from 'react-chartjs-2';

interface Props {
	repos: any[];
}

const StarsByLanguageChart = ({ repos }: Props) => {
	const filteredRepos = repos.filter(
		(repo) => !repo.fork && repo.stargazers_count > 0 && repo.language
	);
	const uniqueLanguages = new Set(filteredRepos.map((repo) => repo.language));

	// console.log(labels);
	// console.log(labels.map((language) => language));

	const data = {
		labels: Array.from(uniqueLanguages.keys()),
		// datasets: [
		// 	{
		// 		data: languages.map((lang) => lang.value),
		// 		backgroundColor: languages.map((lang) => lang.color),
		// 	},
		// ],
	};

	return (
		<div>
			<Pie type='pie' data={data} />
		</div>
	);
};

export default StarsByLanguageChart;
