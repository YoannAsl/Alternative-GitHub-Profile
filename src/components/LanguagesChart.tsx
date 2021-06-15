import { Pie } from 'react-chartjs-2';

interface Props {
	languages: { label: string; value: number; color: string }[];
}

const LanguagesChart = ({ languages }: Props) => {
	console.log(languages);
	const data = {
		labels: languages.map((lang) => lang.label),
		datasets: [
			{
				data: languages.map((lang) => lang.value),
				backgroundColor: languages.map((lang) => lang.color),
			},
		],
	};

	return (
		<div style={{ height: '300px', width: '300px' }}>
			LanguageChart
			<Pie
				type='pie'
				data={data}
				// height={50}
				// width={50}
				// options={{ maintainAspectRatio: false }}
			/>
		</div>
	);
};

export default LanguagesChart;
