import React, { useContext } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/account/Login";
import { NavBar } from "./pages/nav/Nav";
import Layout from "./Layout";

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Route exact path="/login" component={Login} />
        <Route path="/" render={(props) => <Layout {...props} />} />
      </Router>   
    </>
  );
}

export default App;
