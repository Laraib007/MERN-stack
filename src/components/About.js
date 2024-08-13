import React,{useContext} from 'react'
import noteContext from '../contextApi/notes/noteContext'


function About() {
  const a = useContext(noteContext)

  return (
    <div><h1>This is About {a.name}</h1></div>
  )
}

export default About