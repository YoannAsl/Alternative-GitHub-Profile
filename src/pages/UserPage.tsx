import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import GhPoliglot from 'gh-polyglot';
import styled from 'styled-components';

import Section from '../styles/Section';
import LanguagesChart from '../components/LanguagesChart';
import TopReposChart from '../components/TopReposChart';
import UserInfos from '../components/UserInfos';
import TopReposList from '../components/TopReposList';
import StarsByLanguageChart from '../components/StarsByLanguageChart';

export interface UserInfosProps {
    avatar_url: string;
    name: string;
    html_url: string;
    login: string;
    company: string;
    location: string;
    created_at: string;
    public_repos: number;
    followers: number;
    following: number;
}

const UserPage = () => {
    const params: { username: string } = useParams();

    const [user, setUser] = useState<UserInfosProps | null>(null);
    const [repos, setRepos] = useState([]);
    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const userLanguages = new GhPoliglot(`${params.username}`);
            userLanguages.userStats((err: any, stats: any) => {
                if (err)
                    console.error('Error while fetching user languages', err);
                setLanguages(stats);
            });

            const userInfos = await fetch(
                `https://api.github.com/users/${params.username}`
            )
                .then((data) => data.json())
                .catch((err) =>
                    console.error('Error while fetching user infos', err)
                );

            const userRepos = await fetch(
                `https://api.github.com/users/${params.username}/repos?per_page=100`
            )
                .then((data) => data.json())
                .catch((err) =>
                    console.error('Error while fetching user repos', err)
                );

            setUser(userInfos);
            setRepos(userRepos);
        };
        getData();
    }, [params.username]);

    return (
        <main>
            <UserInfos user={user} />
            <Section>
                <ChartsContainer>
                    <LanguagesChart languages={languages} />
                    <TopReposChart repos={repos} />
                    <StarsByLanguageChart repos={repos} />
                </ChartsContainer>
            </Section>
            <TopReposList repos={repos} />
        </main>
    );
};

const ChartsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin-top: -10rem !important;
    margin: 0 auto;
`;

export default UserPage;
