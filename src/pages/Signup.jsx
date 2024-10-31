import React from "react";
import { useState } from "react";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'



 function Signup () {
 const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
     });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
       [name]: value
     });
  };

    
   const handleSubmit = (e) => {  e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
      </div>
      <br />
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <br />
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>
      <br />
      <button type="submit">Sign Up</button>
    </form>
 )}  


export default Signup