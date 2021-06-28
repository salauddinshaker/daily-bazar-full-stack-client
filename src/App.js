import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import Review from "./components/Review/Review";
import CheckOut from "./components/CheckOut/CheckOut";
import Order from "./components/Order/Order";
import AddProduct from "./components/AddProduct/AddProduct";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header/>
      <Switch>  
        <Route path="/addProduct">
        <AddProduct/>
        </Route>
        <Route path="/checkOut">
          <CheckOut />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>

    </Router>
    </UserContext.Provider>
  );
}

export default App;
