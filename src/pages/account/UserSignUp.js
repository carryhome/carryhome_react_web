import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { SignupDetails } from "../profile/data";
import TextInputField from "../profile/components/TextInputField";
import loginUser from "../../images/user.svg";
import { io } from "../../api/io";
import { Link, Redirect } from "react-router-dom";

const UserSignup = ({ setIsRegister, isDoctorRegistration }) => {
  const [inputs, setInputs] = useState(SignupDetails);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isUserCreated, setIsUserCreated] = useState(false);

  const {
    firstName,
    lastName,
    email,
    password,
  } = inputs;
  const changeHandler = (event) => {
    const { name: inputName, value: inputValue } = event.target;

    const updatedInputs = {
      ...inputs,
      [inputName]: {
        ...inputs[inputName],
        value: inputValue,
      },
    };
    setInputs(updatedInputs);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    let payload = {};
    for (let element in inputs) {
      payload = {
        ...payload,
        [element]: inputs[element].value,
      };
    }

    const { ...userData } = payload;

    
    io({
      url: `/user/otp/registration`,
      method: "POST",
      data: userData,
    })
      .then(() => {
        setIsUserCreated(true);
      })
      .catch((error) => {
        const { response: { data: { message } = {} } = {} } = error;
        setIsError(message);
        setTimeout(() => {
          setIsError(false);
        }, 3000);
      });
   
  };

  if (isUserCreated) {
    return <Redirect to="/login" />;
    // return <Redirect to="/dashboard" />;
  }

  return (
    <div className="signUp-set"
      style={{ justifyContent: "center", display: "flex", marginTop: "30px" }}
    >
      <Card className="signUp-set-card">
        <img alt="" src={loginUser} height="45" className="signUp-set-user" />
        <h4 style={{ color: "#086cb6", textAlign: "center"}}> "Registration"</h4>
        <Form>
          <div className="d-flex reg-form-group">
            <TextInputField inputFieldParams={firstName} changeHandler={changeHandler}/>
            <TextInputField className="gk" style={{ border: "1px solid red" }} inputFieldParams={lastName} changeHandler={changeHandler}/>
          </div>

          <TextInputField inputFieldParams={email} changeHandler={changeHandler}/>

          <div className="d-flex reg-form-group">
            <TextInputField inputFieldParams={password} changeHandler={changeHandler}/>
          </div>
          <div id="passwordStatus" style={{ color: "red", marginBottom: "10px" }}>
            {isSuccess && (
              <div className="alert-success width-full">{isSuccess}</div>
            )}
          </div>
         
          <Button onClick={(e) => submitHandler(e)} className="width-full"> Submit </Button>
        </Form>

        {isError && <div className="alert-danger width-full">{isError}</div>}
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <div className="login-set-link user_select">
            <Link to="/login">Have an account? Login Here</Link>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default UserSignup;
