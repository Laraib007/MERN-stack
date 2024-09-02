import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../contextApi/notes/noteContext';
import Noteitem from './Noteitem';

function UserProfile() {
    const ref = useRef(null)
    const login = localStorage.getItem("token")
  const context = useContext(noteContext)
  const {userName} = context;
  console.log(userName)
  return(
    <>
    <div class="dropdown">
    {login?<i  type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"  className=" btn btn-secondary dropdown-toggle   fa-regular fa-user btn btn-secondary "></i>:""}

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
    <p  className='mb-0 ' style={{color:"white"}}>{login? userName: " "}</p>&nbsp; &nbsp;
    </>
  
)
}

export default UserProfile;