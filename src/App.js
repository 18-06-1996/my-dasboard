
import './App.css';
import {BaseApp}  from './Base/BaseApp';
import { Buttons } from './components/Button';
import { Cards } from './components/Cards';
import { Dashboard } from './components/Dashboard';
import { Route,Switch } from 'react-router-dom';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Nopage } from './components/Nopage';
import { Border } from './components/Border';
import { Color } from './components/Color';

function App() {
  return (
    <div className="App">
      
     <Switch>
      <Route exact path="/">
        <Dashboard/>
      </Route>
      <Route path="/button">
        <Buttons/>
      </Route>
      <Route path="/card">
        <Cards/>
      </Route>
      <Route path="/login">
      <Login/>
      </Route>
      <Route path="/register">
      <Register/>
      </Route>
      
      <Route path="/color">
      <Color/>
      </Route>
      <Route path="/border">
      <Border/>
      </Route>
      <Route path="**">
      <Nopage/>
      </Route>

     </Switch>
      
    </div>
  );
}


export default App;
