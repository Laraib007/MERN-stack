import React from 'react'
import Notes from './Notes'
import Addnote from './Addnote'

const Home = (props) => {
  const updatemail =()=>{
    console.log("clicked")
  }
  const {showAlert} = props
  return (
    <div>
      <Addnote showAlert={showAlert} />
      <Notes showAlert={showAlert} />
    </div>
  )
}

export default Home
