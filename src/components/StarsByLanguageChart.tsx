import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';

import languageColors from '../utils/languageColors';
import { ChartContainer, ChartHeader } from '../styles';

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
        <ChartContainer>
            <ChartHeader>
                <h1>Stars per Language</h1>
            </ChartHeader>
            <ChartWrapper>
                <Doughnut
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

export default StarsByLanguageChart;
