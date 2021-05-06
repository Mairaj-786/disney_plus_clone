import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Detail from './components/Detail';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

import './components/index.css'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/detail' component={Detail}></Route>
          <Route exact path='/login' component={Login}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;