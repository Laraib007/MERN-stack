import React,{useContext, useEffect} from 'react'
import noteContext from '../contextApi/notes/noteContext'


function About() {
  const a = useContext(noteContext);
useEffect(() => {
 a.update();
 //react-hooks/exhaustive-deps
 
}, [])
console.log(a.update)
  return (
    <div><h1>This is About {a.state.name} and he is in class {a.state.class}</h1></div>
  )
}

export default About