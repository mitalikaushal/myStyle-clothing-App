import logo from './logo.svg';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage-components';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.component';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
