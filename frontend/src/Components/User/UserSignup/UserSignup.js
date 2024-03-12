// import React from 'react';
// import './usersignup.css'
// import { useState } from 'react';

 
    
//    const UserSignup = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: ''
//       });
    
//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//           ...prevState,
//           [name]: value
//         }));
//       };
    
//       const handleSubmit = () => {
//         // Handle form submission here
//         console.log(formData);
//       };


//     return (
// <div>
// <nav>
//         <ul className='nav-list'>
//         <li><a href="/" >HOME</a></li>

//         </ul>
//         </nav>
//         <div className='header'>

//             <div className='signup'>
//             <div className ="signup-container">
//                 <h1>SIGNUP</h1>
//                 <div className='signup-fields'>

//       <form onSubmit={handleSubmit}>

//         <input 
//           type="text" 
//           placeholder="First Name" 
//           value={formData.firstName} 
//           onChange={handleChange} 
//           required 
//         />
//         <input 
//           type="text" 

//           placeholder="Last Name" 
//           value={formData.lastName} 
//           onChange={handleChange} 
//           required 
//         />
//         <input 
//           type="email" 

//           placeholder="Email" 
//           value={formData.email} 
//           onChange={handleChange} 
//           required 
//         />
//         <input 
//           type="password" 

//           placeholder="Password" 
//           value={formData.password} 
//           onChange={handleChange} 
//           required 
//         />
//         <button type="submit">Create Account</button>
//       </form>
//       <div>
//       </div>
//       <div className="login-message">
//   Already have an account? <a className="login-link" href="/user/login">Login here</a>
// </div>
// </div>
      
//       </div>
//       </div>
//       </div>
//       </div>

      
//   );
// };

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './usersignup.css'; 

const UserSignup = ({ onShopNowClick }) => {

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
         <ul className='nav-list'>
         <li><a href="/" >HOME</a></li>

        </ul>
         </nav>
         <div className='header'>
    <div className="signup">
      <h1 className='signupcontainer-h1'>Signup</h1>
      <div className="signup-container">
        <Formik
          initialValues={{ username: '', email: '', password: '' }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form className="signup-fields">
          <div>
              <Field type="text" name="username" placeholder="Username"  className="user-name" validate={validateUsername} />
              <ErrorMessage name="username" component="div" className="error-message" />
            </div>
            <div>
              <Field type="email" name="email" placeholder="Email" validate={validateEmail} />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <div>
              <Field type="password" name="password" placeholder="Password" validate={validatePassword} />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>
            <button className="CreateAcoount" onClick={onShopNowClick}>
            <a className="createaccount-link" href="/user/collections">Create Account</a>

          </button>
          </Form>
        </Formik>
        <div className="login-message">
          Already have an account? <a className="login-link" href="/user/login">Login here</a>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default UserSignup;
