
import './App.css';
import HomePage from './HomePage-logged-out/HomePage.jsx'
import Search from './HomePage-logged-out/Search.jsx'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (

    <Router>


      <div className="App">


        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/search">
            {/* <HomePage /> */}
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
