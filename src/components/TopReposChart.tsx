import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

import { ChartContainer, ChartHeader } from '../styles';

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
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                ],
            },
        ],
    };

    return (
        <ChartContainer>
            <ChartHeader>
                <h1>Most Starred</h1>
            </ChartHeader>
            <ChartWrapper>
                <Bar
                    type='bar'
                    data={data}
                    options={{
                        maintainAspectRatio: false,
                        responsive: true,
                        plugins: { legend: { display: false } },
                    }}
                />
            </ChartWrapper>
        </ChartContainer>
    );
};

const ChartWrapper = styled.div`
    height: 30rem;
`;

export default TopReposChart;
