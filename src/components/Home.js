import React from 'react'
import Notes from './Notes'
import Addnote from './Addnote'
import UserProfile from './UserProfile'

const Home = (props) => {
  const updatemail =()=>{
    console.log("clicked")
  }
  const {showAlert} = props
  return (
    <div>
      <UserProfile showAlert={props.showAlert} updatemail={updatemail} />
      <Addnote showAlert={showAlert} />
      <Notes showAlert={showAlert} />
    </div>
  )
}

export default Home
