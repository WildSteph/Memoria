import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Multidice from './component/Multidices';
import './App.css';
import Principal from './component/Principal';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dices">Dices</Link>
            </li>
            <li>
              <Link to="/character">Character</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/dices">
            <Multidice />
          </Route>
          <Route path="/character">
            <Principal />
          </Route>
          <Route path="/">
            <p>home</p>
          </Route>
        </Switch>
      </div>
    </Router>  
      </header>
    </div>
  );
}

export default App;
