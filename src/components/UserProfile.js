import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../contextApi/notes/noteContext';
import Noteitem from './Noteitem';

function UserProfile() {
    const loginToken = localStorage.getItem("token")
  const context = useContext(noteContext)
  const {userName} = context;
  return(
    <>
    <p className='mb-0 ' style={{color:"white"}}>{login?<i class="fa-regular fa-user">&nbsp; </i>:""}{login? userName: " "}</p>&nbsp; &nbsp;
    </>
  
)
}

export default UserProfile;