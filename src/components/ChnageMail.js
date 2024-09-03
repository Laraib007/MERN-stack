import React from 'react'
import UserProfile from './UserProfile'

const ChnageMail = () => {
    const op = ()=>{
        console.log("worked done")
    }
  return (
    <div onClick={op}>
        Click Here
    </div>
  )
}

export default ChnageMail
