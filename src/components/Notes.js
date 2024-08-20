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

<button ref={ref} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save Note</button>
      </div>
    </div>
  </div>
</div>

    <h2>Your All Notes</h2>
    <div className=' row ' style={{marginLeft: "7rem"}}>
    {notes.map((note)=>{
    return  <Noteitem key={note._id} upDatenote={upDatenote} note={note}/> 
    })}</div>
    </>
  )
}

export default Notes