import React, { useContext } from 'react'
import noteContext from '../contextApi/notes/noteContext';

const Home = () => {
  const context = useContext(noteContext)
  const {notes, setNotes} = context;
  return (
    <div>
  
      <h1>This is My iNotebook</h1>

      <h2>Add a New Note</h2>
      <form className=' text-start'>
  <div class="form-group ">
    <label className='my-1' for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label  className='my-1' for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>

  <button type="submit" class="btn btn-primary my-3">Submit</button>
</form>

<h2>Your All Notes</h2>
{notes.map((note)=>{
  return note.title 
})}
{/* -----Ending Div------ */}
    </div>
  )
}

export default Home
