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
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiNTEwYjYyZGY0NmI3YTczMDE1ZmYwIn0sImlhdCI6MTcyMzE0MjM0MH0.2Z7yRtwjCNTM9uIqXABG2bD4bKelnFuRK_4vBHm8hDw"
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
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiNTEwYjYyZGY0NmI3YTczMDE1ZmYwIn0sImlhdCI6MTcyMzE0MjM0MH0.2Z7yRtwjCNTM9uIqXABG2bD4bKelnFuRK_4vBHm8hDw"
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
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiNTEwYjYyZGY0NmI3YTczMDE1ZmYwIn0sImlhdCI6MTcyMzE0MjM0MH0.2Z7yRtwjCNTM9uIqXABG2bD4bKelnFuRK_4vBHm8hDw"
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
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiNTEwYjYyZGY0NmI3YTczMDE1ZmYwIn0sImlhdCI6MTcyMzE0MjM0MH0.2Z7yRtwjCNTM9uIqXABG2bD4bKelnFuRK_4vBHm8hDw"
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const res = response.json()

    for (let i = 0; i < notes.length; i++) {
      const element = notes[i];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  }

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getAllnotes }}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState;