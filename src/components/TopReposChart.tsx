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

export default TopReposChart;
