import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../contextApi/notes/noteContext';
import Noteitem from './Noteitem';

function Notes() {
    
  const context = useContext(noteContext)
  const {notes, getAllnotes} = context;
  useEffect(() => {
    getAllnotes()
  }, [])

  
  const [Note, setNote] = useState({etitle: "", edescripition: "", etag: ""})
  const upDatenote =(currentNote)=>{
    ref.current.click()
    setNote({etitle: currentNote.title, edescripition: currentNote.descripition, etag: currentNote.tag})
    console.log(currentNote.tag)
  }
  const ref = useRef()

  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  const onChange = (e)=>{
    setNote({...Note, [e.target.name]: e.target.value})
  } 

  return (
    <>

<button ref={ref} type="button" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
      <form className=' text-start'>
  <div className="form-group ">
    <label className='my-1' htmlFor="exampleInputEmail1">Title</label>
    <input type="text" className="form-control" id="title" name="title" value={Note.etitle} aria-describedby="emailHelp" placeholder="Enter Title" onChange={onChange} />
  </div>
  <div className="form-group">
    <label className='my-1' htmlFor="exampleInputPassword1">Description</label>
    <input type="text" className="form-control" id="description" name="description" value={Note.edescripition}  placeholder="description" onChange={onChange} />
  </div>
  <div className="form-group ">
    <label className='my-1' htmlFor="exampleInputEmail1">Tag</label>
    <input type="text" className="form-control" id="tag" name="tag"value={Note.etag} placeholder="Enter Tag" onChange={onChange} />
  </div>
 </form>
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