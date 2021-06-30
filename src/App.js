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
import Review from "./components/Review/Review";
import Order from "./components/Order/Order";
import AddProduct from "./components/AddProduct/AddProduct";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header/>
      <Switch>  
        <PrivateRoute path="/addProduct">
        <AddProduct/>
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/review">
          <Review />
        </PrivateRoute>
        <PrivateRoute path="/order/:name">
              <Order/>
         </PrivateRoute>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
