import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../contextApi/notes/noteContext';
import Noteitem from './Noteitem';

function DeleteNote(props) {
    const {note, upDatenote} = props
  const context = useContext(noteContext)
  const {deleteNote} = context;
  deleteNote(note._id)
  
  alert("working")
//   ()=> {DeleteNote(note._id); 
//     props.showAlert('Note Deleted Sucessfully', "success");}}
  return <Noteitem key={note._id} showAlert={props.showAlert} DeleteNote={DeleteNote} note={note}/>
}
export default DeleteNote