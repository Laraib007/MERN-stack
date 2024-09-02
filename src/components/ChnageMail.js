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

<button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Email</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form className=' text-start'>
  <div className="form-group ">
    <label className='my-1' htmlFor="exampleInputEmail1">Email</label>
    <input type="email" className="form-control" id="etitle" name="etitle" value={Email.etitle} aria-describedby="emailHelp" placeholder="Enter Email" onChange={onChange} />
  </div>
 </form>
      </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save Note</button>
      </div>
    </div>
  </div>
</div>

      
   
  <UserProfile showAlert={props.showAlert} upDatemail={upDatemail}/>
    </>
  )
}

export default ChangeMail