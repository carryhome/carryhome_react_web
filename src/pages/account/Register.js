import React, { useState, useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Card, CardHeader, CardContent, Divider } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { ToastContainer, toast } from "react-toastify";
import { useHistory, Link } from "react-router-dom";
import {onlyAlphabetsareallowed} from "../../components/reusable/Validations/regex"

const validationSchema = Yup.object({
  firstName: Yup.string()
    .matches(onlyAlphabetsareallowed, "Only alphabets are allowed for this field ")
    .max(30, "only 30 chars are allowed"),
  lastName: Yup.string()
  .matches(onlyAlphabetsareallowed, "Only alphabets are allowed for this field ")
  .max(30, "only 30 chars are allowed"),
  email: Yup.string().email("Email is not valid"),
  password: Yup.string(),
});

export const Register = observer(
  ({
    formData,
    setFormData,
    setNavigation,
    ...props
  }) => {

    <div style={{ marginTop: "15px", color: "orange" }}>Register as User.</div>
    
    return (
      <>
        <div className="signUp-set" style={{ justifyContent: "center", display: "flex", marginTop: "30px"}}>
          <Card style={{ width: "40%" }} variant="outlined">
            <CardHeader
              title="Sign Up"
            />
            <Divider />
            <CardContent>
              <Formik
                initialValues={{
                  firstName: formData?.firstName || "",
                  lastName: formData?.lastName || "",
                  email: formData?.email || "",
                  password: formData?.password || "",
                }}
                validationSchema={validationSchema}
              >
                {({ handleSubmit, handleChange, values, errors, touched }) => (
                  <Form onSubmit={handleSubmit}>
                    <div className="form-row">

                      <div className="form-group col-6">
                        <label htmlFor="firstName">First Name</label>
                        <Field name="firstName" type="text" onChange={handleChange} value={values.firstName}
                          className={"form-control" + (errors.firstName && touched.firstName? " is-invalid": "")}
                        />
                        <ErrorMessage name="firstName" component="div" className="invalid-feedback"/>
                      </div>

                      <div className="form-group col-6">
                        <label htmlFor="lastName">Last Name</label>
                        <Field name="lastName" type="text" onChange={handleChange} value={values.lastName}
                          className={ "form-control" + (errors.lastName && touched.lastName? " is-invalid": "")}
                        />
                        <ErrorMessage name="lastName" component="div" className="invalid-feedback"/>
                      </div>
                    </div>

                   
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Field name="email" type="email" onChange={handleChange} value={values.email}
                        className={ "form-control" + (errors.email && touched.email ? " is-invalid" : "")}
                      />
                      <ErrorMessage name="email" component="div" className="invalid-feedback"/>
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <Field name="password" type="password" onChange={handleChange} value={values.password}
                        className={ "form-control" + (errors.password && touched.password? " is-invalid": "")}
                      />
                      <ErrorMessage name="password" component="div" className="invalid-feedback"/>
                    </div>

                    <div style={{ textAlign: "center", marginTop: "10px" }}>
                      <div className="login-set-link user_select">
                        <Link to="/login">Already a registered user?</Link>
                      </div>
                    </div>

                  </Form>
                )}
              </Formik>
            </CardContent>
          </Card>
          <ToastContainer />
        </div>
      </>
    );
  }
);

