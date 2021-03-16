import styled from "styled-components";

const Card = styled.div`
  box-sizing: border-box;
  border: 1px solid #41bc9d;
  max-width: 410px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hr = styled.hr`
  align-items: center;
  width: 100%;
  border: 1px solid ##db4c47;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #999;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  outline: none;
`;

const CreateLoginButton = styled.button`
  border: 1px solid #41bc9d;
  background: #41bc9d;
  font-size: 1em;
  color: white;
  border-radius: 3px;
  font-weight: 300;
  padding: 7px 12px;
  transition: 0.3s;
  &:hover {
    background-color: #db4c47;
  }
`;
      

const Button = styled.button`
  border: 1px solid #41bc9d;
  background: #41bc9d;
  font-size: 1em;
  color: white;
  border-radius: 3px;
  font-weight: 300;
  padding: 7px 12px;
  transition: 0.3s;
  &:hover {
    background-color: #db4c47;
  }
`;

const Logo = styled.img`
  width: 30%;
  margin-bottom: 1rem;
`;

const Error = styled.div`
  background-color: red;
`;

export { Form, Input, Button, CreateLoginButton, Logo, Card, Error, Hr };
