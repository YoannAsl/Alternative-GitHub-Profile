import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';

interface Props {
	languages: { label: string; value: number; color: string }[];
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

const LanguagesChart = ({ languages }: Props) => {
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
		<Container>
			<header>
				<h1>Top Languages</h1>
			</header>
			<Pie
				type='pie'
				data={data}
				// height={50}
				// width={50}
				// options={{ maintainAspectRatio: false }}
			/>
		</Container>
	);
};

export default LanguagesChart;
