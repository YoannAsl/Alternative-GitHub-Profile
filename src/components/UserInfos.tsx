import styled from 'styled-components';
import { IoCalendarOutline } from 'react-icons/io5';
import { IoLocationOutline } from 'react-icons/io5';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { UserInfosProps } from '../pages/UserPage';

interface Props {
    user: UserInfosProps | null;
}

const UserInfos = ({ user }: Props) => {
    if (!user) return null;

    const {
        avatar_url,
        name,
        html_url,
        login,
        company,
        location,
        created_at,
        public_repos,
        followers,
        following,
    } = user;

    return (
        <Header>
            <img src={avatar_url} alt='Avatar' />
            <h1>{name}</h1>
            <h2>
                <a href={html_url}>@{login}</a>
            </h2>
            <InfosContainer>
                {company && (
                    <li>
                        <IoBriefcaseOutline />
                        {company}
                    </li>
                )}
                {location && (
                    <li>
                        <IoLocationOutline />
                        {location}
                    </li>
                )}
                {created_at && (
                    <li>
                        <IoCalendarOutline /> Joined {''}
                        {new Date(created_at).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                        })}
                    </li>
                )}
            </InfosContainer>

            <CardsContainer>
                <li>
                    <p>{public_repos}</p>
                    <p className='card-description'>repositories</p>
                </li>
                <li>
                    <p>{followers}</p>
                    <p className='card-description'>followers</p>
                </li>
                <li>
                    <p>{following}</p>
                    <p className='card-description'>following</p>
                </li>
            </CardsContainer>
        </Header>
    );
};

const Header = styled.header`
    padding: 5rem 1rem 16rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: hsl(210, 13%, 12%);
    img {
        height: 15rem;
        width: 15rem;
        border-radius: 50%;
        margin-bottom: 3rem;
    }
    h1 {
        color: white;
        margin: 0;
        font-weight: 500;
        font-size: 4rem;
        margin-bottom: 1rem;
    }
    h2 {
        margin-bottom: 1.5rem;
        a {
            font-weight: 400;
            font-family: 'RobotoMono';
            color: rgb(0, 112, 243);
            text-decoration: none;
            font-size: 2.5rem;
        }
    }
`;

const InfosContainer = styled.ul`
    display: flex;
    margin-bottom: 3rem;
    li {
        display: flex;
        color: white;
        margin: 0 1.2rem 0.6rem;
        align-items: center;
        font-size: 1.6rem;
        color: rgb(200, 225, 255);
        svg {
            margin-right: 0.7rem;
        }
    }
    @media (max-width: 37.5em) {
        flex-direction: column;
    }
`;

const CardsContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, minmax(9rem, 15rem));
    gap: 1rem;
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgb(36, 41, 46);
        border-radius: 0.5rem;
        padding: 2rem;
        p {
            color: white;
            margin: 0;
            font-size: 2.2rem;
        }
        .card-description {
            text-transform: uppercase;
            font-size: 1.2rem;
            letter-spacing: 0.12rem;
            margin-top: 1rem;
            color: rgba(200, 225, 255, 0.7);
        }
    }
`;

export default UserInfos;
