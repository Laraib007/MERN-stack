import React, { useContext, useEffect, useRef } from 'react'
import noteContext from '../contextApi/notes/noteContext';
import Noteitem from './Noteitem';

function Notes() {
    
  const context = useContext(noteContext)
  const {notes, getAllnotes} = context;
  useEffect(() => {
    getAllnotes()
  }, [])

  const upDatenote =()=>{
    ref.current.click()
  }
  const ref = useRef()
  return (
    <>


    <h2>Your All Notes</h2>
    <div className=' row ' style={{marginLeft: "7rem"}}>
    {notes.map((note)=>{
    return  <Noteitem key={note._id} upDatenote={upDatenote} note={note}/> 
    })}</div>
    </>
  )
}

export default Notes