import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../contextApi/notes/noteContext';
import Noteitem from './Noteitem';

const Changepassword = (props) => {
    const context = useContext(noteContext)
  const {editPassword, res} = context;
 console.log(res)
  const ref = useRef(null)
  const refClose = useRef(null)

  const [Password, setPassword] = useState({ ePassword: ""})
  
  const handleSubmit=(currentPassword)=>{
    setPassword({ ePassword: currentPassword.password})
      editPassword(Password.ePassword)
    refClose.current.click()  
    if(res == 200){
      props.showAlert('Password Update Sucessfully', "success") 
    }
    else props.showAlert('Some Error Occured', "danger")
  }
  const onChange = (e)=>{
    setPassword({ [e.target.name]: e.target.value})
  } 
  if(Password.ePassword !== Password.cpassword){
    return props.showAlert('Password and Confirm password not match', "danger")
  }
  return (
    <>
<h1 style={{marginTop: "5rem"}} >Change your Password</h1>
<button ref={ref} type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal">
  Click here to chnage your Password
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Password</h1>
        
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
      <div className="modal-body">
      <form className=' text-start'>
      <p><strong>IMP:</strong> Be carefull while entering New Password in case of forgetting password your account might be Lost forever!</p>
  <div className="form-group ">
    <label className='my-1' htmlFor="exampleInputEmail1">Password</label>
    <input type="text" className="form-control" id="ePassword" name="ePassword" value={Password.ePassword} aria-describedby="emailHelp" placeholder="Enter New Password"  required/>
    <input type="text" className="form-control my-2" id="Cpas" name="Cpas" value={Password.cpassword} aria-describedby="emailHelp" placeholder="Confirm Password" onChange={onChange} required/>
  </div>
 </form>
      </div>
      <div className="modal-footer">
        <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Change Password</button>
      </div>
    </div>
  </div>
</div>

      
  </>  
  )
}

export default Changepassword
