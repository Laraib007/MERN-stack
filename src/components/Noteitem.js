import React from 'react'

function Noteitem(props) {
    const {note} = props
  return (
    <div class="card  m-3 col-md-3 "  >
  <div class="card-body ">
    <h5 class="card-title">{note.title}</h5>
    <p class="card-text">{note.descripition}</p>
  </div>
</div>
  )
}

export default Noteitem