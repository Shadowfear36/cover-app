import React, { useState } from 'react'

export default function Login() {

  const initialFormState = {
    email: '',
    password: ''
  };

  //initialize form state
  const [formState, setFormState] = useState(initialFormState);

  // handle form input Change
  const handleChange = (e) => {
      setFormState({...formState, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Login: " + formState.email + ' ' + formState.password )
  }

  return (
    <div className="page-container">
        <div className="landing-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" onChange={handleChange} required placeholder="Email" />
                <input type="password" name="password" onChange={handleChange} required placeholder="Password"/>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
  )
}
