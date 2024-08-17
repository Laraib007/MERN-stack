import React from 'react'

const Addnote = () => {
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

  <button type="submit" className="btn btn-primary my-3" onClick={handleSubmit}>Submit</button>
</form>
    </div>
  )
}

export default Addnote
