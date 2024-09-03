import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../contextApi/notes/noteContext';
import Noteitem from './Noteitem';

const Changeemail = (props) => {
    const context = useContext(noteContext)
    const {notes, getAllnotes, editNote,} = context;
    
    
    useEffect(() => {
      getAllnotes()
    }, [])
   
    const ref = useRef(null)
    const refClose = useRef(null)
  
    const [Note, setNote] = useState({ etitle: "", edescription: "", etag: ""})
    const upDatenote =(currentNote)=>{
      ref.current.click()
      setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag})
    }
   
  
    const handleSubmit=(e)=>{
      editNote(Note.id, Note.etitle, Note.edescription, Note.etag)
      refClose.current.click()
      props.showAlert('Note Updated Sucessfully', "success")
    }
    const onChange = (e)=>{
      setNote({...Note, [e.target.name]: e.target.value})
      console.log( setNote({...Note, [e.target.name]: e.target.value}))
    } 
    return (
      <>
  <h1 style={{marginTop: "5rem"}}>Change Email Address</h1>
  <button ref={ref} type="button" className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#exampleModal">
    Click Here to Change your Email
  </button>
  
  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
        <form className=' text-start'>
    <div className="form-group ">
      <label className='my-1' htmlFor="exampleInputEmail1">Title</label>
      <input type="text" className="form-control" id="etitle" name="etitle" value={Note.etitle} aria-describedby="emailHelp" placeholder="Enter Title" onChange={onChange} />
    </div>
    <div className="form-group">
      <label className='my-1' htmlFor="exampleInputPassword1">Description</label>
      <input type="text" className="form-control" id="edescription" name="edescription" value={Note.edescription}  placeholder="description" onChange={onChange} />
    </div>
    <div className="form-group ">
      <label className='my-1' htmlFor="exampleInputEmail1">Tag</label>
      <input type="text" className="form-control" id="etag" name="etag"value={Note.etag} placeholder="Enter Tag" onChange={onChange} />
    </div>
   </form>
        </div>
        <div className="modal-footer">
          <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary" onClick={handleSubmit}>Save Note</button>
        </div>
      </div>
    </div>
  </div>
</>  
  )
}

export default Changeemail
