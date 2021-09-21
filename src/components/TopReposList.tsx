import { useState } from 'react';
import styled from 'styled-components';

interface Props {
    repos: any[];
}

const TopReposList = ({ repos }: Props) => {
    const [sortBy, setSortBy] = useState('stargazers_count');

    const topRepos = repos
        .filter((repo) => !repo.fork)
        .sort((a, b) => b[sortBy] - a[sortBy])
        .splice(0, 8);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
        setSortBy(e.currentTarget.value);

    return (
        <section>
            <header>
                <h1>Top Repos</h1>
            </header>
            <p>by</p>
            <select name='sortBy' onChange={handleChange}>
                <option value='stargazers_count'>Stars</option>
                <option value='forks'>Forks</option>
                <option value='size'>Size</option>
            </select>
            <ul>
                {topRepos.map((repo: any) => (
                    <Card key={repo.id}>
                        <a
                            href={repo.html_url}
                            target='_blank'
                            rel='noreferrer noopener'
                        >
                            <h3>{repo.name}</h3>
                            <p>{repo.description}</p>
                            <p>{repo.language}</p>
                            <p>{repo.stargazers_count}</p>
                            <p>{repo.forks}</p>
                            <p>{repo.size} KB</p>
                        </a>
                    </Card>
                ))}
            </ul>
        </section>
    );
};

const Card = styled.li`
    border: solid black 1px;
    background-color: white;
    a {
        text-decoration: none;
        color: rgb(36, 41, 46);
    }
    h3 {
        font-family: 'RobotoMono';
    }
`;

export default TopReposList;
