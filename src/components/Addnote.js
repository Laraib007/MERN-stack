import React, { useContext, useState } from 'react'
import noteContext from '../contextApi/notes/noteContext';



const Addnote = () => {
    const context = useContext(noteContext)
  const {addNote} = context;

    const [Note, setNote] = useState({title: "", description: "", tag: ""})

  const handleSubmit=(e)=>{
    e.preventDefault()
    addNote(Note.title, Note.description, Note.tag)
  }
  const onChange = (e)=>{
    setNote({...Note, [e.target.name]: e.target.value})
  } 



  return (
    <div>
       <h1>This is My iNotebook</h1>

<h2>Add a New Note</h2>
<form className=' text-start'>
  <div className="form-group ">
    <label className='my-1' htmlFor="exampleInputEmail1">Title</label>
    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" placeholder="Enter Title" onChange={onChange} />
  </div>
  <div className="form-group">
    <label className='my-1' htmlFor="exampleInputPassword1">Description</label>
    <input type="text" className="form-control" id="description" name="description" placeholder="description" onChange={onChange} />
  </div>
  <div className="form-group ">
    <label className='my-1' htmlFor="exampleInputEmail1">Tag</label>
    <input type="text" className="form-control" id="tag" name="tag" placeholder="Enter Tag" onChange={onChange} />
  </div>
  <button type="submit" className="btn btn-primary my-3" onClick={handleSubmit}>Submit</button>
</form>
    </div>
  )
}

export default Addnote
