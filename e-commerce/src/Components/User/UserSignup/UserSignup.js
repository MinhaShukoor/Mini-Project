import React from 'react';
import './usersignup.css'
import { useState } from 'react';

 
    
   const UserSignup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = () => {
        // Handle form submission here
        console.log(formData);
      };



       
        return (
            <div className='signup'>
            <div className ="signup-container">
                <h1>SIGNUP</h1>
                <div className='signup-fields'>

      <form onSubmit={handleSubmit}>

        <input 
          type="text" 
          placeholder="First Name" 
          value={formData.firstName} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="text" 

          placeholder="Last Name" 
          value={formData.lastName} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 

          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="password" 

          placeholder="Password" 
          value={formData.password} 
          onChange={handleChange} 
          required 
        />
        <button type="submit">Create Account</button>
      </form>
      <div>
      </div>
      <div className="login-message">
  Already have an account? <a className="login-link" href="/login">Login here</a>
</div>

      </div>
      
      </div>
      </div>
  );
};

 

export default UserSignup;