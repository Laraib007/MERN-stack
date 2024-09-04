import { useState } from "react";
import noteContext from "./noteContext";
import Navbar from "../../components/Navbar";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const InitialNotes =[]
  const [notes, setNotes] = useState(InitialNotes)
  const [userName, setUser] = useState()
  const [userEmail, setEmail] = useState()
  // Fetching all Notes
    const getAllnotes = async () => {
    // API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
    })
    const json = await response.json()
    setNotes(json)
  }

  // Adding a New Note
  const addNote = async (title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const Note = {
      "title": title,
      "description": description,
      "tag": tag,
    }
    setNotes(notes.concat(Note))
  }

  // Delete a Note
  const deleteNote = async (id) => {
    // API call
    const response = await fetch(`${host}/api/notes/deletnote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ id }),
    });
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }
  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const res = response.json()
    const newNotes = JSON.parse(JSON.stringify(notes))
    for (let i = 0; i < newNotes.length; i++) {
      const element = newNotes[i];
      if (element._id === id) {
        newNotes[i].title = title;
        newNotes[i].description = description;
        newNotes[i].tag = tag;
        break;
      }
      setNotes(newNotes)
    }
  }

// authenticate user and login required
const getUser = async ()=>{
  const response = await fetch('http://localhost:5000/api/auth/getuser', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem('token')
    }
  });
  try{
      const user = await response.json()
  const newNotes = JSON.stringify(user)
  const userNAme = user.user.name
  const userEmail1 = user.user.email
  setUser(userNAme)
  setEmail(userEmail1)
console.log(userEmail1)
  }
catch{
  
}
}
getUser()
  

// Edit a Email
const editEmail = async (id, email) => {
  // API call
  const response = await fetch(`${host}/api/auth/updateemail${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem('token')
    },
    body: JSON.stringify({ email }),
    
  });
  const res = response.json()
  console.log(res)
  let email1 = email;
  
  setEmail(email1)
  console.log(email1)
  }


  return (
    <noteContext.Provider value={{editEmail, userEmail, userName, notes, addNote, deleteNote, editNote, getAllnotes, getUser }}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState;