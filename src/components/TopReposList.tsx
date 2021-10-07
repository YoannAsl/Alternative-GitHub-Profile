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
        <Container>
            <Header>
                <h1>Top Repos</h1>
                <span>by</span>
                <select name='sortBy' onChange={handleChange}>
                    <option value='stargazers_count'>Stars</option>
                    <option value='forks'>Forks</option>
                    <option value='size'>Size</option>
                </select>
            </Header>
            <CardsContainer>
                {topRepos.map((repo: any) => (
                    <Card key={repo.id}>
                        <a
                            href={repo.html_url}
                            target='_blank'
                            rel='noreferrer noopener'
                        >
                            <h3>{repo.name}</h3>
                            <p className='repo-description'>
                                {repo.description}
                            </p>
                            <div>
                                <p className='repo-language'>{repo.language}</p>
                                <p className='repo-likes'>
                                    {repo.stargazers_count}
                                </p>
                                <p className='repo-forks'>{repo.forks}</p>
                                <p className='repo-size'>{repo.size} KB</p>
                            </div>
                        </a>
                    </Card>
                ))}
            </CardsContainer>
        </Container>
    );
};

const Container = styled.section`
    padding: 3rem 5rem;
    max-width: 1400px;
    margin: 0 auto;
`;

const Header = styled.header`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    span {
        margin: 0 1rem;
    }
`;

const CardsContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 1rem;
    height: fit-content;
`;

const Card = styled.li`
    a {
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.2) 0 1rem 3rem -1.5rem;
        border-radius: 0.25rem;
        transition: all 200ms cubic-bezier(0.23, 1, 0.32, 1) 0s;
        padding: 2rem;
        color: rgb(88, 96, 105);
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    h3 {
        color: black;
        font-family: 'RobotoMono';
        font-size: 2rem;
        font-weight: 500;
        margin: 0;
    }
    .repo-description {
        font-size: 1.4rem;
    }
    div {
        display: flex;
        font-size: 1.3rem;
    }
    &:hover,
    &:focus {
        box-shadow: 0 0.8rem 2rem -1.5rem rgba(0, 0, 0, 0.2);
    }
`;

export default TopReposList;
