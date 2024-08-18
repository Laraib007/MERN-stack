import { useState } from "react";
import noteContext from "./noteContext";

const NoteState =(props)=>{
  const host = "http://localhost:5000"
    const InitialNotes = [
        {
          "_id": "66b7139ee91c79ea532sd317bc3",
          "user": "66b510b62df46b7a73015ff0",
          "title": "Testing my First note updated",
          "descripition": "My Second Note updated",
          "tag": "Personal",
          "date": "2024-08-10T07:15:42.971Z",
          "__v": 0
        },
        {
            "_id": "66b7139ee91c79sdfea532317bc2",
            "user": "66b510b62df46b7a73015ff0",
            "title": "Testing my second note updated",
            "descripition": "My Second Note updated",
            "tag": "Personal",
            "date": "2024-08-10T07:15:42.971Z",
            "__v": 0
          },
          {
            "_id": "66b7139ewere91c79ea532317bc1",
            "user": "66b510b62df46b7a73015ff0",
            "title": "Testing my Third note updated",
            "descripition": "My Second Note updated",
            "tag": "Personal",
            "date": "2024-08-10T07:15:42.971Z",
            "__v": 0
          },
          {
            "_id": "66b7139ee91c6579ea532317bc4",
            "user": "66b510b62df46b7a73015ff0",
            "title": "Testing my Fourth note updated",
            "descripition": "My Second Note updated",
            "tag": "Personal",
            "date": "2024-08-10T07:15:42.971Z",
            "__v": 0
          }
      ]
    const [notes, setNotes] = useState(InitialNotes)

    // Adding a New Note
      const addNote = (title, descripition, tag)=>{
        const Note ={
          "_id": "66b7139ee91c6579ea532317bc",
          "user": "66b510b62df46b7a73015ff0",
          "title": title,
          "descripition": descripition,
          "tag": tag,
          "date": "2024-08-10T07:15:42.971Z",
          "__v": 0
        }
        setNotes(notes.concat(Note))
      }
      
    // Delete a Note
      const deleteNote =(id)=>{
        const newNotes = notes.filter((note)=>{return note._id !== id})
        setNotes(newNotes)
      }
    // Edit a Note
      const editNote= async(id, title, descripition, tag)=>{
        // API call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiNTEwYjYyZGY0NmI3YTczMDE1ZmYwIn0sImlhdCI6MTcyMzE0MjM0MH0.2Z7yRtwjCNTM9uIqXABG2bD4bKelnFuRK_4vBHm8hDw"
          },
          body: JSON.stringify({ title, descripition, tag }),
        });
        const res = response.json()

        for (let i = 0; i < notes.length; i++) {
          const element = notes[i];
          if(element._id === id){
            element.title = title;
            element.descripition = descripition;
            element.tag = tag;
          }
        }
      }

    return(
        <noteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;