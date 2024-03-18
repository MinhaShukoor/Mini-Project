// import React from 'react'
// import './userlogin.css'
// import { useState } from 'react';


// const UserLogin = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = () => {
//     // Handle form submission here
//     console.log(formData);
//   };


// return (
      
// <div>

//         <nav>
//         <ul className='nav-list'>
//         <li><a href="/" >HOME</a></li>

//         </ul>
//         </nav>

//         <div className='header'>
//         <div className='login'>
//         <div className ="login-container">
//             <h1>LOGIN</h1>
//             <div className='login-fields'>

//   <form onSubmit={handleSubmit}>

//     <input 
//       type="email" 

//       placeholder="Email" 
//       value={formData.email} 
//       onChange={handleChange} 
//       required 
//     />
//     <input 
//       type="password" 

//       placeholder="Password" 
//       value={formData.password} 
//       onChange={handleChange} 
//       required 
//     />
//     <button type="submit">Login</button>
//   </form>
//   <div>
//   </div>
//   <div className="login-message"><a className="login-link" href="/user/signup">Create a new account</a>
// </div>
// </div>
  
//   </div>
//   </div>
//    </div>
//    </div>
  
// );
// };


// export default UserLogin



  import React from 'react';
  import './userlogin.css'

  import { Formik, Form, Field, ErrorMessage } from 'formik';
  
  const UserLogin = () => {
    const handleLoginClick = () => {
      // Navigate to the /admindashboard route
      window.location.href = '/user/collections';
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
                        <div className="login-message">
                      <div className="login-message"><a className="login-link" href="/user/signup">Create a new account</a>
</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
  };
export default UserLogin
