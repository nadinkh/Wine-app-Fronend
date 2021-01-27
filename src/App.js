import './App.css';
import HomePage from './HomePage-logged-out/HomePage.jsx'
import Search from './HomePage-logged-out/Search.jsx'
import UserProfile from './userProfile/UserProfile.jsx'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import Pairing from './components/Pairing';
function App() {
  // const [token, setToken] = useState("")
  // useEffect(() => {
  //   setToken(localStorage.getItem('token'))
  // }, [])
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
          <Route exact path="/userprofile">
            <UserProfile />
          </Route>
          <Route exact path="/pairing">
            <Pairing />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
