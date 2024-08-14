import { useState } from "react";
import noteContext from "./noteContext";

const NoteState =(props)=>{

    const InitialNotes = [
        {
          "_id": "66b7139ee91c79ea532317bc",
          "user": "66b510b62df46b7a73015ff0",
          "title": "Testing my second note updated",
          "descripition": "My Second Note updated",
          "tag": "Personal",
          "date": "2024-08-10T07:15:42.971Z",
          "__v": 0
        },
        {
            "_id": "66b7139ee91c79ea532317bc",
            "user": "66b510b62df46b7a73015ff0",
            "title": "Testing my second note updated",
            "descripition": "My Second Note updated",
            "tag": "Personal",
            "date": "2024-08-10T07:15:42.971Z",
            "__v": 0
          },
          {
            "_id": "66b7139ee91c79ea532317bc",
            "user": "66b510b62df46b7a73015ff0",
            "title": "Testing my second note updated",
            "descripition": "My Second Note updated",
            "tag": "Personal",
            "date": "2024-08-10T07:15:42.971Z",
            "__v": 0
          }
      ]
    const [notes, setNotes] = useState(InitialNotes)
    return(
        <noteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;