import logo from './logo.svg';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage-components';

const HatsPage = () => (
  <div>
    <h2>HATS PAGE</h2>
  </div>
)

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
