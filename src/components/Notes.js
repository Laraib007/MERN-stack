import React, { useContext } from 'react'
import noteContext from '../contextApi/notes/noteContext';
import Noteitem from './Noteitem';

function Notes() {
    
  const context = useContext(noteContext)
  const {notes, setNotes} = context;
  return (
    <div className=' row'><h2>Your All Notes</h2>
    {notes.map((note)=>{
    return <Noteitem  note={note}/> 
    })}</div>
  )
}

export default Notes