import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact>
                        <HomePage />
                    </Route>
                    <Route path='/user/:username'>
                        <UserPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
