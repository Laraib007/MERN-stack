import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../contextApi/notes/noteContext';
import Noteitem from './Noteitem';

function UserProfile() {
    const ref = useRef(null)
    const login = localStorage.getItem("token")
  const context = useContext(noteContext)
  const {userName} = context;
  const handleClick =()=>{
    ref.current.click()
    console.log("Clicked")
  }
  return(
    <>
    <div class="dropdown">
    <button ref={ref} type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
    <p  className='mb-0 ' style={{color:"white"}}>{login?<i onClick={handleClick} style={{marginRight: "0.3rem"}} className="fa-regular fa-user btn btn-secondary "></i>:""}{login? userName: " "}</p>&nbsp; &nbsp;
    </>
  
)
}

export default UserProfile;