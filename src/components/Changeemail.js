import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../contextApi/notes/noteContext';
import Noteitem from './Noteitem';
import { Link } from 'react-router-dom';
import Changepassword from './ChangePassword';

const Changeemail = (props) => {
    const context = useContext(noteContext)
  const {editEmail, res} = context;
 console.log(res)
  const ref = useRef(null)
  const refClose = useRef(null)

  const [Email, setEmail] = useState({ eEmail: ""})
  
  const handleSubmit=(currentEmail)=>{
      setEmail({ eEmail: currentEmail.email})
    editEmail(Email.eEmail)
    refClose.current.click()  
    if(res == 200){
      props.showAlert('Email Update Sucessfully', "success") 
    }
    else props.showAlert('Email  Already Used', "danger")
  }
  const onChange = (e)=>{
    setEmail({ [e.target.name]: e.target.value})
  } 
  return (
    <>
<h1 style={{marginTop: "5rem"}} >Change your email</h1>
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
      <p><strong>IMP:</strong> Be carefull while entering New email address in case of adding space between your email or using invalid email type your account might be Lost forever!</p>
  <div className="form-group ">
    <label className='my-1' htmlFor="exampleInputEmail1">Email</label>
    <input type="email" className="form-control" id="eEmail" name="eEmail" value={Email.eEmail} aria-describedby="emailHelp" placeholder="Enter Email" onChange={onChange} required/>
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
<Link className={`btn btn-primary mx-1 `} to="/Changepassword" role="button">Chnage Your Password</Link>
    
      
  </>  
  )
}

export default Changeemail
