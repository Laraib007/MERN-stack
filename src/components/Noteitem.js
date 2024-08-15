import React from 'react'

function Noteitem(props) {
    const {note} = props
  return (
    <div class="card p-4 m-3 col-md-3 "   >
  <div class="card-body ">
    <h5 class="card-title">{note.title}</h5>
    <p class="card-text">{note.descripition}</p>
    <i class="fa-solid fa-trash mx-2 curserHover"></i>
    <i class="fa-solid fa-pen-to-square mx-2"></i>
  </div>
</div>
  )
}

export default Noteitem