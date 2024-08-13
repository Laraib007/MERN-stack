import { useState } from "react";
import noteContext from "./noteContext";

const NoteState =(props)=>{
    const s1 ={
        "name": "Labi",
        "class": "10b"
    }
    let [state, setState] = useState(s1)
    const update = ()=>{
      setTimeout(() => {
        setState ={
            "name": "Labi",
            "class": "10b"
        }
      }, 1000);
    }
    return(
        <noteContext.Provider value={{state, update}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;