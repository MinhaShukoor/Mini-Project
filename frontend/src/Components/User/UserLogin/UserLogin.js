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
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './userlogin.css'

const UserLogin = ({ onShopNowClick }) => {

    const validateUsername = (value) => {
      let error;
      if (!value) {
        error = 'Username is required';
      } else if (!/^[a-zA-Z0-9]{3,}$/.test(value)) {
        error = 'Username must contain at least 3 characters and only contain alphanumeric characters';
      }
      return error;
    };


  const validateEmail = (value) => {
    let error;
    if (!value) {
      error = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  };

  const validatePassword = (value) => {
    let error;
    if (!value) {
      error = 'Password is required';
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(value)) {
      error = 'Password must contain at least 8 characters, including uppercase, lowercase, and numbers';
    }
    return error;
  };

  return (
    <div>
     <nav>
         <ul className='nav-home'>
         <li><a href="/" >HOME</a></li>

        </ul>
         </nav>
         <div className='header-login'>
    <div className="login">
      <h1 className='login-head'>Login</h1>
      <div className="login-container">
        <Formik
          initialValues={{ username: '',  password: '' }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className="login-fields">
          <div>
              <Field type="text" name="username" placeholder="Username"  className="user-name" validate={validateUsername} />
              <ErrorMessage name="username" component="div" className="error-message" />
            </div>
          
            <div>
              <Field type="password" name="password" placeholder="Password" validate={validatePassword} />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>
            <div className="login-message" onClick={onShopNowClick}><a className="login-link" href="/user/signup">Create a new account</a>
            </div>
          </Form>
        </Formik>
        </div>
      </div>
    </div>
    </div>
  );
};
export default UserLogin
