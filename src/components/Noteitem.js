import React, { useContext, useRef } from 'react'
import noteContext from '../contextApi/notes/noteContext';

function Noteitem(props) {
  const context = useContext(noteContext)
  const {deleteNote} = context;

  const deleteNoteRef = useRef(null)

const deleteNoteFunc =()=>{
  deleteNoteRef.current.click()
 
}
    const {note, upDatenote} = props
  return (
    <>
    <div>
<button ref={deleteNoteRef} type="button" class=" d-none btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Deleting Note</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h4>Are You Sure to Want to Delete This Note?</h4>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={deleteNote(note._id)} >Delete Note</button>
      </div>
    </div>
  </div>
</div>
    </div>
    <div className="card p-1 m-2 col-md-3 hoverClass"   >
  <div className="card-body ">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <p><i className="fa-solid fa-tag">&nbsp;</i>{note.tag}</p>
    <i className="fa-solid fa-trash mx-2 " onClick={()=> {deleteNoteFunc(); 
    props.showAlert('Note Deleted Sucessfully', "success");}}></i>
    <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{upDatenote(note)}}></i>
    
  </div>
</div>
</>
  )
}

export default Noteitem