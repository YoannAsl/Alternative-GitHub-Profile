import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

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
                    'rgb(255, 159, 64)',
                ],
            },
        ],
    };

    return (
        <Container>
            <header>
                <h1>Most Starred</h1>
            </header>
            <ChartContainer>
                <Bar
                    type='bar'
                    data={data}
                    options={{
                        maintainAspectRatio: false,
                        responsive: true,
                        plugins: { legend: { display: false } },
                    }}
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
    @media (max-width: 25em) {
    }
`;

const ChartContainer = styled.div`
    height: 30rem;
`;

export default TopReposChart;
