import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import loginUser from '../../icons/logo/carrylogo.png'
import { Card, Form, Input, Button, CreateLoginButton, Hr } from "../../components/AuthForm";
import { io } from "../../api/io";

const Login = () => {

  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function postLogin(event) {
    event.preventDefault();
    handleEmailFlow();
  }

  function handleEmailFlow() {
    const payload = {
      emailAddress: userName,
      password: password,
    };
    io({url: `/user/password/login`, data: payload, method: "POST"})
      .then(({ status, data }) => {
        if (status === 200) login(data);
      }).catch(error => {
        const { response: { data: { message } = {} } = {} } = error;
        setIsError(message);
      });
  }

  return (
    <div className="login-set">
      <Card className="login-set-card">
        <img alt="" src={loginUser} height="45" className="login-set-user" />

        <Form onSubmit={postLogin}>
          <Input type="username" value={userName} onChange={(e) => { setUserName(e.target.value)}} required placeholder="Email address"/>
          <Input type="Password" value={password} onChange={(e) => { setPassword(e.target.value)}} required placeholder="password"/>
          <div className="flex align-center" style={{ marginBottom: "10px" }}> </div>
          <Button type="submit"><span style = {{fontWeight: 'bold'}}>Log In</span></Button>
        </Form>

        <div className="flex align-center" style={{ marginBottom: "10px" }}> </div>
        <Link id="forgot" to={{ pathname: "/forgot-password", state: { email: userName}}}>
          Forgotten password?
        </Link>
        

        <Link id="register" to="/register">
          <Hr></Hr>
          <CreateLoginButton><span style = {{fontWeight: 'bold'}}>Create New Account</span></CreateLoginButton>
        </Link>
      </Card>
    </div>
  );
}

export default Login;
