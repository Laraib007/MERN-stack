import React, { useContext } from 'react'
import noteContext from '../contextApi/notes/noteContext';

function Noteitem(props) {
  const context = useContext(noteContext)
  const {deleteNote} = context;

    const {note, upDatenote} = props
  return (
    
    <div className="card p-4 m-3 col-md-3 hoverClass"   >
  <div className="card-body ">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <i className="fa-solid fa-trash mx-2 " onClick={()=>{deleteNote(note._id)}}></i>
    <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{upDatenote(note)}}></i>
  </div>
</div>
  )
}

export default Noteitem