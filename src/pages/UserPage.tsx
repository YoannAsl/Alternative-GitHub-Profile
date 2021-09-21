import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import GhPoliglot from 'gh-polyglot';
import styled from 'styled-components';

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

    // useEffect(() => {
    //     const getData = async () => {
    //         const lang = new GhPoliglot(`${params.username}`);
    //         lang.userStats((err: any, stats: any) => {
    //             if (err) console.error('Error', err);
    //             setLanguages(stats);
    //         });
    //         try {
    //             const userInfos = await axios.get(
    //                 `https://api.github.com/users/${params.username}`
    //             );
    //             const userRepos = await axios.get(
    //                 `https://api.github.com/users/${params.username}/repos?per_page=100`
    //             );

    //             setUser(userInfos.data);
    //             setRepos(userRepos.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //     getData();
    // }, [params.username]);

    // Gets user infos
    useEffect(() => {
        const getUserInfos = async () => {
            try {
                const req = await axios.get(
                    `https://api.github.com/users/${params.username}`
                );
                setUser(req.data);
            } catch (error) {
                console.error(error);
            }
        };
        getUserInfos();
    }, [params.username]);

    // Gets user repositories
    useEffect(() => {
        const getUserRepos = async () => {
            try {
                const req = await axios.get(
                    `https://api.github.com/users/${params.username}/repos?per_page=100`
                );
                setRepos(req.data);
            } catch (error) {
                console.error(error);
            }
        };
        getUserRepos();
    }, [params.username]);

    // Gets languages used by user
    useEffect(() => {
        const me = new GhPoliglot(`${params.username}`);
        me.userStats((err: any, stats: any) => {
            if (err) console.error('Error', err);
            setLanguages(stats);
        });
    }, [params.username]);

    return (
        <main>
            <UserInfos user={user} />
            <Container>
                <ChartsContainer>
                    <LanguagesChart languages={languages} />
                    <TopReposChart repos={repos} />
                    <StarsByLanguageChart repos={repos} />
                </ChartsContainer>
                <TopReposList repos={repos} />
            </Container>
        </main>
    );
};

const Container = styled.div`
    background-color: rgb(246, 248, 250);
    padding: 1rem;
`;

const ChartsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    gap: 2rem;
    justify-items: center;
    max-width: 1200px;
    padding: 1rem;
    margin-top: -9rem;
    margin-left: auto;
    margin-right: auto;
`;

export default UserPage;
