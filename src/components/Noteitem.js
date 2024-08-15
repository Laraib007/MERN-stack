import React from 'react'

function Noteitem(props) {
    const {note} = props
  return (
    <div className="card p-4 m-3 col-md-3 "   >
  <div className="card-body ">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.descripition}</p>
    <i className="fa-solid fa-trash mx-2 "></i>
    <i className="fa-solid fa-pen-to-square mx-2"></i>
  </div>
</div>
  )
}

export default Noteitem