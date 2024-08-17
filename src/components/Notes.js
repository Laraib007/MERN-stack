import React, { useContext } from 'react'
import noteContext from '../contextApi/notes/noteContext';
import Noteitem from './Noteitem';

function Notes() {
    
  const context = useContext(noteContext)
  const {notes} = context;
  return (
    <>
    <h2>Your All Notes</h2>
    <div className=' row ' style={{marginLeft: "7rem"}}>
    {notes.map((note)=>{
    return  <Noteitem key={note._id} note={note}/> 
    })}</div>
    </>
  )
}

export default Notes