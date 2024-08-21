import React, { useState } from 'react'

const Login = () => {

    
    const [credentials, setCredentials] = useState({ email: '', password: ''})
   
const handleSubmit= async(e)=>{
    e.preventDefault()
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          },
        body: JSON.stringify({ email: credentials.email, password : credentials.password }),
      });
      const res = await response.json()
      console.log(res)
  }
  const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
  } 
  return (
    <div>
      <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" name='email' aria-describedby="emailHelp"  onChange={onChange} value={credentials.email}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" name='password' id="password" onChange={onChange}  value={credentials.password}/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login
