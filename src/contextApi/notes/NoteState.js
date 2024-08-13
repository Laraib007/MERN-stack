import { useState } from "react";
import noteContext from "./noteContext";

const NoteState =(props)=>{
    const s1 ={
        "name": "Labi",
        "class": "10b"
    }
    const [state, setState] = useState(s1)
    const upadte = ()=>{
        setTimeout(() => {
             setState ={
                "name": "LRB",
                "class": "12"
            }
        }, 1000);
    }
    return(
        <noteContext.Provider value={{state, upadte}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;