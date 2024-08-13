import React,{useContext} from 'react'
import NoteContext from '../contextApi/notes/NoteContext'
function About() {
  const a = useContext(NoteContext)
  return (
    <div><h1>This is About page {a.name}</h1></div>
  )
}

export default About