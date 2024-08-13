import React,{useContext, useEffect} from 'react'
import noteContext from '../contextApi/notes/noteContext'


function About() {
  const a = useContext(noteContext)
useEffect(() => {
  first

  return () => {
    second
  }
}, [])

  return (
    <div><h1>This is About {a.name}</h1></div>
  )
}

export default About