import React from "react";
import { Form } from "react-bootstrap";

const TextareaInputField = ({
  inputFieldParams: { name, type, label, value, placeholder = "", rows },
  changeHandler,
}) => {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as={type}
        name={name}
        value={value}
        rows={rows}
        placeholder={placeholder}
        onChange={(e) => changeHandler(e)}
      />
    </Form.Group>
  );
};
export default TextareaInputField;
