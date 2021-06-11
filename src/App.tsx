import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import User from './components/User';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/user/:username' component={User} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
