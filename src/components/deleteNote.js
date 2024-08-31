import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../contextApi/notes/noteContext';
import Noteitem from './Noteitem';

function DeleteNote(props) {
    
  const context = useContext(noteContext)
  const {notes, getAllnotes, editNote,} = context;

  return
}
export default DeleteNote