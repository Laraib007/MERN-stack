import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../contextApi/notes/noteContext';
import Noteitem from './Noteitem';
import { Link } from 'react-router-dom';

function UserProfile(props) {
  const {upDatemail} = props
  upDatemail()
    const ref = useRef(null)
    const login = localStorage.getItem("token")
  const context = useContext(noteContext)
  const {userName, userEmail} = context;
const logout=() => {
    ref.current.click()
  localStorage.removeItem("token")
  props.showAlert('Logout Sucessfully', "success")}
  return(
    <>
    
    {  login?<i ref={ref} style={{marginRight: "0rem"}} type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"  className=" btn btn-secondary dropdown-toggle   fa-regular fa-user btn btn-secondary "></i>:""}
    <div class="btn-group dropstart">
  <ul style={{marginTop: "1rem"}} class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start" aria-labelledby="dropdownMenuButton1">
    <li className='text-center'><a ><strong >Your Profile:</strong></a></li>
    <li><a class="dropdown-item" >User Name: <strong>{userName}</strong> </a></li>
    <li><a class="dropdown-item" >Email: <strong>{userEmail}</strong> </a></li>
    <li><a class="dropdown-item" onClick={()=>{upDatemail()}}>Update your email</a></li>
    <Link className={`btn btn-primary mx-1 ${!login ? 'd-none': ''}`} onClick={logout} to="/Login" role="button">Logout</Link>
  </ul>
</div>
    
    </>
  
)
}

export default UserProfile;