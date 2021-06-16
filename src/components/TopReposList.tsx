import { useState } from 'react';

interface Props {
	repos: any[];
}

const TopReposList = ({ repos }: Props) => {
	const [sortBy, setSortBy] = useState('stargazers_count');
	let topRepos = repos
		.filter((repo) => !repo.fork)
		.sort((a, b) => b[sortBy] - a[sortBy])
		.splice(0, 8);
	console.log(topRepos);
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
		setSortBy(e.currentTarget.value);

	return (
		<div>
			<select name='sortBy' onChange={handleChange}>
				<option value='stargazers_count'>Stars</option>
				<option value='forks'>Forks</option>
				<option value='size'>Size</option>
			</select>
			<ul>
				{topRepos.map((repo: any) => (
					<li key={repo.id}>
						<a
							href={repo.html_url}
							target='_blank'
							rel='noreferrer noopener'
						>
							<h3>{repo.name}</h3>
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TopReposList;
