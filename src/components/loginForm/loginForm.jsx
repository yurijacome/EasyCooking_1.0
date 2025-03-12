import React from 'react';



import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { StyledForm } from './loginFormStyle';

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required'),
    password: Yup.string().required('Password is required'),
});




const LoginForm = () => {
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
                    <h1>Faça seu login </h1>
                    <Field className="Field" name="email" placeholder="Email" />
                    <ErrorMessage name="email" component="span" />
                    <Field className="Field" name="password" type="password" placeholder="Password" />
                    <ErrorMessage name="password" component="span" />
                    <button type="submit">Login</button>



                </StyledForm>
            )}
        </Formik>
    );
}



export default LoginForm;
