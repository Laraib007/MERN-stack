import React,{useContext, useEffect} from 'react'
import noteContext from '../contextApi/notes/noteContext'


function About() {
  let a = useContext(noteContext);
useEffect(() => {
 a.update();
}, [])

  return (
    <div><h1>This is About {a.state.name}</h1></div>
  )
}

export default About