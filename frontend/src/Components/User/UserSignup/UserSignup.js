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

// import React from 'react';
// import { useFormik } from 'formik';
// import { signup } from '../../../Services/UserApi';

// const validate = values => {
//   const errors = {};
//   if (!values.username.trim()){
//     errors.username = 'Username is required';
//   }
//   if (!values.email.trim()){
//     errors.email = 'Email is required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
//     errors.email = 'Please enter a valid email address';
//   }
//   if (!values.password){
//     errors.password = 'Password is required';
//   } else if (values.password.length < 8){
//     errors.password = 'Password must be at least 8 characters long';
//   }
//   if (!values.confirmPassword){
//     errors.confirmPassword = 'Confirm Password is required';
//   } else if (values.confirmPassword !== values.password){
//     errors.confirmPassword = 'Passwords do not match';
//   }
//   return errors;
// }

// function UserSignUp () {
//   const formik = useFormik({
//     initialValues:{
//       username: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//     },
//     validate,
//     onSubmit: async values => {
//       const {data} = await signup(values)
//       console.log(values);
//     },
//   });

//   return (
//     <div className='formS'>
//       <form onSubmit={formik.handleSubmit} className='for'>
//          <h1 className='create'>CREATE AN ACCOUNT</h1>
//          <p>
//           <label htmlFor='email' ></label>
//           <input
//             type='text'
//             id='email'
//             name='email'
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.email}
//             className='email'
//             placeholder='Email'
//           />
//           {formik.touched.email && formik.errors.email && <div className="error">{formik.errors.email}</div>}
//          </p>
//          <p>
//           <label htmlFor='username'></label>
//           <input
//             type='text'
//             id='username'
//             name='username'
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.username}
//             className='use'
//             placeholder='Username'
//           />
//           {formik.touched.username && formik.errors.username && <div className="error">{formik.errors.username}</div>}
//          </p>
//          <p>
//           <label htmlFor='password' ></label>
//           <input
//             type='password'
//             id='password'
//             name='password'
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.password}
//             className='pass'
//             placeholder='Password'
//           />
//           {formik.touched.password && formik.errors.password && <div className="error">{formik.errors.password}</div>}
//          </p>
//          <p>
//           <label htmlFor='confirmPassword' ></label>
//           <input
//           className='inpu-conf'
//             type='password'
//             id='confirmPassword'
//             name='confirmPassword'
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.confirmPassword}
            
//             placeholder='Confirm Password'
//           />
//           {formik.touched.confirmPassword && formik.errors.confirmPassword && <div className="error">{formik.errors.confirmPassword}</div>}
//          </p>
        
//          <p>
//           <button className='acc' type='submit'>SIGNUP</button>
//          </p>
//          <p className='do'>Do you have an account? <a href='/Login'>Login</a></p>
//       </form>
//     </div>
//   );
// }

// export default UserSignup;

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './usersignup.css'
import { signup } from '../../../Services/userApi';
// import { signup } from '../../../../../backend/Controller/Usercontroller';


const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Username is required')
    .matches(/^[a-zA-Z0-9_]{3,20}$/, 'Invalid username. Must be 3-20 characters and alphanumeric'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
    .matches(/\.com$/, 'invalid email'),
  phone: Yup.string()
    .matches(
      /^\+(?:[0-9] ?){6,14}[0-9]$/,
      'Invalid phone number. Must be a valid international phone number'
    )
    .required('Phone number is required'),
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least 8 characters, including one uppercase, one lowercase, one number, and one special character.'
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});



const UserSignup = () => {
    const initialValues = {
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    };
  
    const handleSubmit = async (values) => {
      console.log(values);
      const {data} = await signup(values);
      
    };
  
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >

        <Form>
        <div className='signup-form'>
       <div className="signup-container">
            <label htmlFor="username">Username:</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage name="username" component="div" className="error-message" />
          </div>
  
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>
  
          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <Field type="tel" id="phone" name="phone" />
            <ErrorMessage name="phone" component="div" className="error-message" />
          </div>
  
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" className="error-message" />
          </div>
  
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <Field type="password" id="confirmPassword" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component="div" className="error-message" />
          </div>
  
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
          </div>
          
        </Form>
      </Formik>
    );
  };
  
  
 
  export default UserSignup

                          
