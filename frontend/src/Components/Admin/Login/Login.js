

import React from 'react';
import './login.css'

import { Formik, Form, Field, ErrorMessage } from 'formik';

const Login = () => {
  const handleLoginClick = () => {
    // Navigate to the /admindashboard route
    window.location.href = '/admin/dashboard';
};
  
    const validateUsername = (value) => {
        if (!value) {
            return 'Username is required';
        } else if (!/^[a-zA-Z0-9]{3,}$/.test(value)) {
            return 'Username must contain at least 3 characters and only contain alphanumeric characters';
        }
        return null;
    };

    const validatePassword = (value) => {
        if (!value) {
            return 'Password is required';
        } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(value)) {
            return 'Password must contain at least 8 characters, including uppercase, lowercase, and numbers';
        }
        return null;
    };

    return (
      <div>
          <nav>
              <ul className='nav-list'>
                  <li><a href="/">HOME</a></li>
              </ul>
          </nav>
          <div className='header'>
              <div className="signup">
                  <h1 className='logincontainer-h1'>LOGIN</h1>
                  <div className="login-container">
                      <Formik
                          initialValues={{ username: '', password: '' }}
                          onSubmit={(values, { setSubmitting }) => {
                              // const usernameError = validateUsername(values.username);
                              // const emailError = validateEmail(values.email);
                              // const passwordError = validatePassword(values.password);

                              // if (usernameError || emailError || passwordError) {
                              //     // If any validation fails, set the error state
                              //     setError('Please fix the errors in the form.');
                              // } else {
                              //     // If no validation errors, navigate to the next page
                              //     setSubmitting(true);
                              //     // Navigate to the next page after successful account creation
                              //     window.location.href = "/user/collections";
                              // }
                          }}
                      >
                      
                          <Form className="signup-fields">
                              <div>
                                  <Field type="text" name="username" placeholder="Username" className="user-name" validate={validateUsername} />
                                  <ErrorMessage name="username" component="div" className="error-message" />
                              </div>
                             
                              <div>
                                  <Field type="password" name="password" placeholder="Password" validate={validatePassword} />
                                  <ErrorMessage name="password" component="div" className="error-message" />
                              </div>
                              <button onClick={handleLoginClick} className="CreateAcoount">Login</button>

                          </Form>
                      </Formik>
                     
                  </div>
              </div>
          </div>
      </div>
    );
};
export default Login