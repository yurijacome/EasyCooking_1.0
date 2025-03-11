import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { StyledForm } from './registerFormStyle';

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});

const RegisterForm = () => {
    return (
        <Formik
            initialValues={{ username: '', password: '', confirmPassword: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {() => (
                <StyledForm>
                    <h1>Register Form</h1>
                    <Field className="Field" name="email" placeholder="email" />
                    <ErrorMessage name="username" component="div" />

                    <Field className="Field" name="name" placeholder="name" />

                    <Field className="Field" name="password" type="password" placeholder="Password" />
                    <ErrorMessage name="password" component="div" />

                    <Field className="Field" name="confirmPassword" type="password" placeholder="Confirm Password" />
                    <ErrorMessage name="confirmPassword" component="div" />

                    <button type="submit">Register</button>
                </StyledForm>
            )}
        </Formik>
    );
};

export default RegisterForm;