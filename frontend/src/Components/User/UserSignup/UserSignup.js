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

 

// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import React, { useState } from 'react';


// const UserSignup = () => {
//     const validationSchema = Yup.object().shape({
//         firstName: Yup.string().required('First Name is required'),
//         lastName: Yup.string().required('Last Name is required'),
//         email: Yup.string().email('Invalid email').required('Email is required'),
//         password: Yup.string()
//             .required('Password is required')
//             .min(8, 'Password must be at least 8 characters'),
//         confirmPassword: Yup.string()
//             .oneOf([Yup.ref('password'), null], 'Passwords must match')
//             .required('Confirm Password is required'),
//     });

//     const initialValues = {
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     };

//     const [isSubmitted, setIsSubmitted] = useState(false);

//     const handleSubmit = (values, { setSubmitting }) => {
//         // Your form submission logic goes here
//         console.log(values);
//         setIsSubmitted(true);
//         setSubmitting(false);
//     };
//     return (
//         <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//         >
//             {({ isSubmitting }) => (
//                 <Form className="signup-container">
//                     <h1>SIGNUP</h1>
//                     <div className="signup-fields">
//                         <Field type="text" name="firstName" placeholder="First Name" />
//                         <ErrorMessage name="firstName" component="div" className="error-message" />
//                         <Field type="text" name="lastName" placeholder="Last Name" />
//                         <ErrorMessage name="lastName" component="div" className="error-message" />
//                         <Field type="email" name="email" placeholder="Email" />
//                         <ErrorMessage name="email" component="div" className="error-message" />
//                         <Field type="password" name="password" placeholder="Password" />
//                         <ErrorMessage name="password" component="div" className="error-message" />
//                         <Field type="password" name="confirmPassword" placeholder="Confirm Password" />
//                         <ErrorMessage name="confirmPassword" component="div" className="error-message" />
//                     </div>
//                     <button type="submit" disabled={isSubmitting}>
//                         {isSubmitting ? 'Creating Account...' : 'Create Account'}
//                     </button>
//                     {isSubmitted && (
//                         <div className="success-message">Account created successfully!</div>
//                     )}
//                 </Form>
//             )}
//         </Formik>
//     );
// };

// export default UserSignup




import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
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
  
    const handleSubmit = (values, { setSubmitting }) => {
      // Handle form submission logic here
      console.log(values);
      setSubmitting(false);
    };
  
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="form-group">
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
        </Form>
      </Formik>
    );
  };

  
  
  export default UserSignup
  