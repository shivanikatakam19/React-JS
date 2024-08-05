
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
function FormikComponent() {
    return (
        <div className="App">
            <center>
                <h1>Register a new account</h1>
                <Formik

                    initialValues={{ fullname: "", email: "", password: "" }}

                    onSubmit={(values, { setSubmitting }) => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }}

                    validate={(values) => {
                        const errors = {};
                        if (!values.fullname) {
                            errors.fullname = "Full name is required";
                        }

                        if (!values.email) {
                            errors.email = "Email is required";
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = "Invalid email address";
                        }
                        if (!values.password) {
                            errors.password = "Password is required";
                        }
                        return errors;
                    }}
                >

                    {() => (
                        <Form className="d-grid col-md-3">
                            <Field className="mb-2 rounded"
                                type="text"
                                name="fullname"
                                placeholder="Enter your fullname"
                            />
                            <ErrorMessage name="fullname" component="div" />

                            <Field className="mb-2 rounded"
                                type="email"
                                name="email"
                                placeholder="Enter email address"
                            />
                            <ErrorMessage name="email" component="div" />

                            <Field className="mb-2 rounded" type="password" name="password" placeholder="Enter password" />
                            <ErrorMessage name="password" component="div" />

                            <button type="submit" >
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </center>
        </div>
    );
}
export default FormikComponent;