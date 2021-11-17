import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.scss';
import { PrivateRoute } from './privateRoute/authroute';
import routers from './routers';
import { DefaltLayout } from './view/layout/DefaultLayout';
import { Dasboard } from './view/pages/dasboard/dasboard';
import { Login } from './view/pages/login/login';
import { NotFoundPage } from './view/pages/notfound/notfound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/notfound">
          <NotFoundPage/>
        </Route>
        <PrivateRoute path="/">
          <DefaltLayout routers={routers}/>
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
