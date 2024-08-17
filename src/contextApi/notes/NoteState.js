import { useState } from "react";
import noteContext from "./noteContext";

const NoteState =(props)=>{

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
      const editNote=()=>{

      }

    return(
        <noteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;