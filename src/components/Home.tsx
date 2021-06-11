import { useState } from 'react';
import { useHistory } from 'react-router-dom';

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
		<main>
			<form onSubmit={handleSubmit}>
				<input type='text' value={username} onChange={handleChange} />
			</form>
		</main>
	);
};

export default Home;
