import React, { useState } from "react";
import { Register } from "./Register";
import "./Register.scss";

const Registration = () => {

  const [formData, setFormData] = useState({})
  const [navigation, setNavigation] = useState({ id: "register" });

  const props = {
    formData,
    setFormData,
    setNavigation,
  }

  return <Register {...props} />;
}

export default Registration;
