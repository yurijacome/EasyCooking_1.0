import React from 'react';

import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { StyledForm } from './registerFormStyle';

const validationSchema = Yup.object().shape({

    email: Yup.string().email('Invalid email').required('Email is required')
    .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    'Invalid email'),

    username: Yup.string().required('Username is required')
    .min(8, 'username is too short - should be 8 chars minimum.'),

    password: Yup.string().required('Password is required')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    'Password must contain at least one uppercase letter, one lowercase letter, and one number.'),
    
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});

const RegisterForm = () => {
 
 
    return (

        <Formik
            initialValues={{ username: '', password: '', confirmPassword: '', email: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {() => (
                <StyledForm>
                    <h1>Registrar</h1>

                    <label>Email </label>
                    <Field className="Field" name="email" placeholder="Email" />
                    <ErrorMessage name="email" component="span" />

                    <label>Nome </label>
                    <Field className="Field" name="username" placeholder="Nome" />
                    <ErrorMessage name="username" component="span" />

                    <label>Senha </label>
                    <Field className="Field" name="password" type="password" placeholder="Senha" />
                    <ErrorMessage name="password" component="span" />

                    <label>Confirmar senha </label>
                    <Field className="Field" name="confirmPassword" type="password" placeholder="Confirm Password" />
                    <ErrorMessage name="confirmPassword" component="span" />

                    <button type="submit">Registrar</button>
                    <span className='registerSpan'>Ja tem uma conta? Faça seu <a href="/login">login</a></span>
                </StyledForm>
            )}
        </Formik>
    );
};

export default RegisterForm;
