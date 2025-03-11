import React, { useState } from 'react';

import RegisterForm from '../registerForm/registerForm';

import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { StyledForm } from './loginFormStyle';

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
});




const LoginForm = () => {
    const [showRegisterForm, setShowRegisterForm] = useState(false);

    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {() => (
                <StyledForm>
                    <h1>Login Form</h1>
                    <Field className="Field" name="username" placeholder="Username" />
                    <ErrorMessage name="username" component="span" />
                    <Field className="Field" name="password" type="password" placeholder="Password" />
                    <ErrorMessage name="password" component="span" />
                    <button type="submit">Login</button>
                    <span>Don't have an account? <a onClick={() => setShowRegisterForm(true)}>Register</a></span>
                    {showRegisterForm && <RegisterForm />}



                </StyledForm>
            )}
        </Formik>
    );
}



export default LoginForm;
