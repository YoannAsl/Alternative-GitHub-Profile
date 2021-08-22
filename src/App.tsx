import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route path='/' exact component={HomePage} />
					<Route path='/user/:username' component={UserPage} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
