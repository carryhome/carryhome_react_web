import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/nav/Home";
import "./App.scss";

const Layout = () => {

  return (
    <>
      <div className="">
        <Route exact path="/" component={Home} />

        {/* <Route exact path="/about-us" component={AboutUs} /> */}

        {/* <Route
          path="/register"
          render={(props) => <Registration {...props} />}
        /> */}

        {/* <PrivateRoute path="/patients" component={PatientsHome} /> */}
      </div>
    </>
  );
};

export default Layout;
