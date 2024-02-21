import React from 'react'
import './userlogin.css'
import { useState } from 'react';


const UserLogin = () => {
  const [formData, setFormData] = useState({
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
      
<div>
<div className='logo-container'>

<div classname = "logo"   className='logo-image'/>
        <nav>
        <ul className='nav-list'>
        <li><a href="/" >HOME</a></li>

        </ul>
        </nav>

        <div className='header'>
        <div className='login'>
        <div className ="login-container">
            <h1>LOGIN</h1>
            <div className='login-fields'>

  <form onSubmit={handleSubmit}>

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
    <button type="submit">Login</button>
  </form>
  <div>
  </div>
  <div className="login-message"><a className="login-link" href="/login">Create a new account</a>
</div>
</div>
  
  </div>
  </div>
   </div>
   </div>
   </div>
  
);
};


export default UserLogin

