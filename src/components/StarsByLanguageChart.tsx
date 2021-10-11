import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';

import languageColors from '../utils/languageColors';

interface Props {
    repos: any[];
}

const StarsByLanguageChart = ({ repos }: Props) => {
    const filteredRepos = repos.filter(
        (repo) => !repo.fork && repo.stargazers_count > 0 && repo.language
    );
    const uniqueLanguages = Array.from(
        new Set(filteredRepos.map((repo) => repo.language))
    );

    const data = {
        labels: uniqueLanguages,
        datasets: [
            {
                data: uniqueLanguages.map((language) => {
                    const repos = filteredRepos.filter(
                        (repo) => repo.language === language
                    );
                    const starsArray = repos.map(
                        (repo) => repo.stargazers_count
                    );
                    const starsSum = starsArray.reduce((a, b) => a + b);

                    return starsSum;
                }),
                backgroundColor: uniqueLanguages.map(
                    (language) => languageColors[language]
                ),
            },
        ],
    };

    return (
        <Container>
            <header>
                <h1>Stars per Language</h1>
            </header>
            <ChartContainer>
                <Doughnut
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

export default StarsByLanguageChart;
