import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.main`
	background-color: rgb(36, 41, 46);
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	h1 {
		color: white;
	}
	form {
		margin-bottom: 20vh;
	}
	input {
		padding: 5px 20px;
		font-family: 'RobotoMono';
	}
`;

const Home = () => {
	const history = useHistory();
	const [username, setUsername] = useState('');

	const handleChange = (e: React.FormEvent<HTMLInputElement>) =>
		setUsername(e.currentTarget.value);

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		history.push(`/user/${username}`);
	};

	return (
		<Main>
			<h1>Look up a GitHub profile</h1>
			<form onSubmit={handleSubmit}>
				<input type='text' value={username} onChange={handleChange} />
			</form>
		</Main>
	);
};

export default Home;
