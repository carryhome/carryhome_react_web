import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import loginUser from '../../icons/user.svg'
import { Card, Form, Input, Button } from "../../components/AuthForm";
import { io } from "../../api/io";

const Login = () => {

  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginOtp, setIsLoginOtp] = useState(false);
  const [isOtpSuccess, setIsOtpSuccess] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [loginDetails, setLoginDetails] = useState({})

  function postLogin(event) {
    event.preventDefault();
    if (isLoginOtp) {
      handleOtpFlow();
    } else {
      handleEmailFlow();
    }
  }

  function handleIsLoginOtp(otpStatus) {
    setIsLoginOtp(otpStatus);
    setUserName("");
    setIsOtpSuccess(false);
    setPassword("");
    setIsError("");
  }

  function handleEmailFlow() {
    const payload = {
      emailAddress: userName,
      password: password,
    };
    io({
      url: `/user/password/login`,
      data: payload,
      method: "POST",
    })
      .then(({ status, data }) => {
        if (status === 200) {
          login(data);
        }
      })
      .catch((error) => {
        const { response: { data: { message,lockUntil, loginAttempts, maxLoginAttempts } = {} } = {} } = error;
        setLoginDetails({
          loginAttempts, maxLoginAttempts, lockUntil
        })
        setIsError(message);
      });
  }

  function handleOtpFlow() {
    let url = "";
    const payload = {};
    url = `/user/${userName}/sendOTP?isLogin=true`;

    io({
      url: url,
      data: payload,
      method: "POST",
    })
      .then(({ data: { statusCode } = {} }) => {
        if (statusCode === 200) {
          setIsOtpSuccess(true);
        } else {
          setIsOtpSuccess(false);
          setIsError(true);
        }
      })
      .catch((error) => {
        const { response: { data: { message } = {} } = {} } = error;
        setIsError(message);
      });
  }

  const handleSubmitOtp = () => {
    const payload = {
      mobileNumber: userName,
      otp: otpValue,
    };

    io({
      url: `/user/otp/login`,
      data: payload,
      method: "POST",
    })
      .then(({ status, data = {} }) => {
        if (status === 200) login(data);
      })
      .catch((error) => {
        const {
          response: {
            data: { message, lockUntil, loginAttempts, maxLoginAttempts } = {},
          } = {},
        } = error;
        setLoginDetails({
          loginAttempts,
          maxLoginAttempts,
          lockUntil,
        });
        setIsError(message);
      });
  };
  
  return (
    <div className="login-set">
      <Card className="login-set-card">
        <img alt="" src={loginUser} height="45" className="login-set-user" />
        <h4
          style={{
            color: "#086cb6",
            margin: "0 0 15px 0",
          }}
        >
          Login
        </h4>

        <Form onSubmit={postLogin}>
          <Input
            type="username"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            required
            placeholder={
              !isLoginOtp ? "email / mobile number" : "mobile number"
            }
          />
          {!isLoginOtp && (
            <Input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              placeholder="password"
            />
          )}

          <div
            className="flex align-center"
            style={{
              marginBottom: "10px",
            }}
          >
            <span>
              <Input
                type="checkbox"
                value={isLoginOtp}
                onChange={(e) => {
                  handleIsLoginOtp(!isLoginOtp);
                }}
                placeholder=""
                style={{
                  margin: "0 10px 0 0",
                }}
              />
            </span>
            <span
              style={{
                fontSize: "14px",
              }}
            >
              Login with OTP instead of password
            </span>
          </div>

          {!isOtpSuccess && <Button type="submit">Sign In</Button>}
        </Form>

        {isOtpSuccess && isLoginOtp && (
          <>
            <Input
              type="otp"
              value={otpValue}
              onChange={(e) => {
                setOtpValue(e.target.value);
              }}
              placeholder="Please enter OTP here"
            />
            <Button onClick={handleSubmitOtp}>Submit OTP to login </Button>
          </>
        )}

        <div
          className="login-set-link user_select flex"
          style={{ flexDirection: "row" }}
        >
          <div>
            <Link
              id="register"
              to="/register"
              style={{
                marginRight: "30px",
              }}
            >
              Don't have an account?
            </Link>
          </div>
          <div>
            <Link
              id="forgot"
              to={{
                pathname: "/forgot-password",
                state: {
                  mobileNumber: userName,
                },
              }}
            >
              Forgot password
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Login;
