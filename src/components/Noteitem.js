import React, { useContext } from 'react'
import noteContext from '../contextApi/notes/noteContext';

function Noteitem(props) {
  const context = useContext(noteContext)
  const {deleteNote} = context;

    const {note, upDatenote} = props
  return (
    
    <div className="card p-1 m-2 col-md-3 hoverClass"   >
  <div className="card-body ">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <p><i class="fa-solid fa-tag">&nbsp;</i>{note.tag}</p>
    <i className="fa-solid fa-trash mx-2 " onClick={()=>{deleteNote(note._id)}}></i>
    <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{upDatenote(note)}}></i>
    
  </div>
</div>
  )
}

export default Noteitem