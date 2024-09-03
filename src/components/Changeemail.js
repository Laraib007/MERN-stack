import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../contextApi/notes/noteContext';
import Noteitem from './Noteitem';

const Changeemail = (props) => {
    const context = useContext(noteContext)
  const {editEmail} = context;
 
 
  const ref = useRef(null)
  const refClose = useRef(null)

  const [Email, setEmail] = useState({ etitle: ""})
  
 
 

  const handleSubmit=(currentEmail)=>{
    editEmail(Email.id, Email.email)
    refClose.current.click()
    props.showAlert('Email Updated Sucessfully', "success")
    
    setEmail({id: currentEmail._id, etitle: currentEmail.email})
    console.log(currentEmail)
  }
  const onChange = (e)=>{
    setEmail({ [e.target.name]: e.target.value})
    console.log( setEmail({ [e.target.name]: e.target.value}))
  } 
  return (
    <>
<h1 style={{marginTop: "5rem"}} >Chnage your email</h1>
<button ref={ref} type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal">
  Click here to chnage your email
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
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Change Email</button>
      </div>
    </div>
  </div>
</div>

      
  </>  
  )
}

export default Changeemail
