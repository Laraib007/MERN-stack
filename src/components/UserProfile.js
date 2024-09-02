import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../contextApi/notes/noteContext';
import Noteitem from './Noteitem';

function UserProfile() {
    const login = localStorage.getItem("token")
  const context = useContext(noteContext)
  const {userName} = context;
  return(
    <>
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle d-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
    <p className='mb-0 ' style={{color:"white"}}>{login?<i style={{marginRight: "0.3rem"}} className="fa-regular fa-user btn btn-secondary dropdown-toggle"></i>:""}{login? userName: " "}</p>&nbsp; &nbsp;
    </>
  
)
}

export default UserProfile;