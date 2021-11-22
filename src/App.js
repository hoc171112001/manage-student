import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.scss';
import { PrivateRoute } from './privateRoute/authroute';
import routers from './routers';
import routers2 from './routers2';
import { DefaltLayout } from './view/layout/DefaultLayout';
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
          <DefaltLayout routers={routers} routers2={routers2} />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
