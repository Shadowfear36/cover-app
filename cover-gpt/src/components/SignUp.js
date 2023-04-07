import React, { useState } from 'react'

export default function SignUp() {

  const initialFormState = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  };

  //initialize form state
  const [formState, setFormState] = useState(initialFormState);

  // handle form input Change
  const handleChange = (e) => {
      setFormState({...formState, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Signup: " + formState.name ) 
  }

  return (
    <div className="page-container">
    <div className="landing-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={handleChange}  required placeholder="Name" />
            <input type="text" name="email" onChange={handleChange} required placeholder="Email" />
            <input type="password" name="password" onChange={handleChange} required placeholder="Password"/>
            <input type="password" name="password_confirmation" onChange={handleChange} required placeholder="Password Confirmation"/>
            <button type="submit">Sign Up</button>
        </form>
    </div>
</div>
  )
}
