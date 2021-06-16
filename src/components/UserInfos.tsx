interface Props {
	user: any;
}

const UserInfos = ({ user }: Props) => {
	return (
		<div>
			<img
				src={user.avatar_url}
				alt='Avatar'
				style={{ width: '150px', borderRadius: '50%' }}
			/>
			<h1>{user.name}</h1>
			<h2>
				<a href={user.html_url}>@{user.login}</a>
			</h2>
			{user.company && <p>(ADD COMPANY ICON){user.company}</p>}
			{user.location && <p>(ADD LOCATION ICON){user.location}</p>}
			{user.created_at && (
				<p>
					(ADD CALENDAR ICON) Joined{' '}
					{new Date(user.created_at).toLocaleDateString('en-US', {
						month: 'long',
						day: 'numeric',
						year: 'numeric',
					})}
				</p>
			)}

			<div>
				<div>
					<p>{user.public_repos}</p>
					<p>repositories</p>
				</div>
				<div>
					<p>{user.followers}</p>
					<p>followers</p>
				</div>
				<div>
					<p>{user.following}</p>
					<p>following</p>
				</div>
			</div>
		</div>
	);
};

export default UserInfos;
