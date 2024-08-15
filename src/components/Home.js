import React from 'react'
import Notes from './Notes'

const Home = () => {
  return (
    <div>
  
      <h1>This is My iNotebook</h1>

      <h2>Add a New Note</h2>
      <form className=' text-start'>
  <div className="form-group ">
    <label className='my-1' for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label  className='my-1' for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>

  <button type="submit" className="btn btn-primary my-3">Submit</button>
</form>

<Notes />
{/* -----Ending Div------ */}
    </div>
  )
}

export default Home
