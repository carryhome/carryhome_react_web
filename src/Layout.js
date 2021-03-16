import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/nav/Home";
import AboutUs from "./components/AboutUs";
import Registration from "./pages/account/Registration";
import "./App.scss";

const Layout = () => {

  return (
    <>
      <div className="">
        <Route exact path="/" component={Home} />

        <Route exact path="/company" component={AboutUs} />

        <Route path="/register" render={(props) => <Registration {...props} />} />

      </div>
    </>
  );
};

export default Layout;
