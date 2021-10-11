import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';

interface Props {
    languages: { label: string; value: number; color: string }[];
}

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
            <ChartContainer>
                <Pie
                    type='pie'
                    data={data}
                    options={{ maintainAspectRatio: false, responsive: true }}
                />
            </ChartContainer>
        </Container>
    );
};

const Container = styled.div`
    background-color: white;
    padding: 2rem 1rem;
    border-radius: 0.5rem;
    box-shadow: 0rem 0.5rem 3rem rgba(0, 0, 0, 0.1);
    max-width: 50rem;
    h1 {
        margin: 0;
    }
`;

const ChartContainer = styled.div`
    height: 30rem;
`;

export default LanguagesChart;
