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
    padding: 4rem 1rem 10rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: hsl(210, 13%, 12%);
    img {
        height: 150px;
        width: 150px;
        border-radius: 50%;
    }
    h1 {
        color: white;
        margin: 0;
        font-weight: 500;
    }
    a {
        font-weight: 400;
        font-family: 'RobotoMono';
        color: rgb(0, 112, 243);
        text-decoration: none;
    }
`;

const InfosContainer = styled.ul`
    display: flex;
    flex-direction: column;
    li {
        display: flex;
        color: white;
        margin: 0;
        margin-bottom: 0.6rem;
        align-items: center;
        justify-content: center;
        svg {
            margin-right: 5px;
        }
    }
`;

const CardsContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, minmax(90px, 150px));
    gap: 1rem;
    margin-top: 2rem;
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: hsl(210, 13%, 19%);
        border-radius: 5px;
        padding: 1rem 0.5rem;
        p {
            color: white;
            margin: 0;
        }
        .card-description {
            text-transform: uppercase;
            font-size: 0.55rem;
            letter-spacing: 1px;
        }
    }
`;

export default UserInfos;
