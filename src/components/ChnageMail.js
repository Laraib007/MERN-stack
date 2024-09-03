import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../contextApi/notes/noteContext';
import Noteitem from './Noteitem';
import UserProfile from './UserProfile';

function ChangeMail(props) {
    
  const context = useContext(noteContext)
  const {editEmail} = context;
 
 
  const ref = useRef(null)
  const refClose = useRef(null)

  const [Email, setEmail] = useState()
  
  const upDatemail =(currentEmail)=>{
    console.log("clicked working")
    ref.current.click()
    setEmail({id: currentEmail._id, email: currentEmail.email})
  }
 

  const handleSubmit=(e)=>{
    editEmail(Email.id, Email.email)
    refClose.current.click()
    props.showAlert('Email Updated Sucessfully', "success")
  }
  const onChange = (e)=>{
    setEmail({ [e.target.name]: e.target.value})
    console.log( setEmail({ [e.target.name]: e.target.value}))
  } 
  return (
    <>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Open modal for @getbootstrap</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className="form-group ">
    <label className='my-1' htmlFor="exampleInputEmail1">Email</label>
    <input type="email" className="form-control" id="etitle" name="etitle" value={Email} aria-describedby="emailHelp" placeholder="Enter Email" onChange={onChange} />
  </div>
      </div>
      <div class="modal-footer">
      <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save Note</button>
      </div>
    </div>
  </div>
</div>
      
   
  
    </>
  )
}

export default ChangeMail
