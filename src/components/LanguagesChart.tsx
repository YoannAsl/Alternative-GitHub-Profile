import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';

import { ChartContainer, ChartHeader } from '../styles';

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
        <ChartContainer>
            <ChartHeader>
                <h1>Top Languages</h1>
            </ChartHeader>
            <ChartWrapper>
                <Pie
                    type='pie'
                    data={data}
                    options={{ maintainAspectRatio: false, responsive: true }}
                />
            </ChartWrapper>
        </ChartContainer>
    );
};

const ChartWrapper = styled.div`
    height: 30rem;
`;

export default LanguagesChart;
