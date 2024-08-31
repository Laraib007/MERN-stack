import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const InitialNotes =[]
  const [notes, setNotes] = useState(InitialNotes)
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
    console.log(json)
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




  // Get User
  const getUser = async (user) => {
    // API call
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify(user),
    });
    const res = response.json()
    console.log(res)
  }
  getUser()
  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getAllnotes }}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState;