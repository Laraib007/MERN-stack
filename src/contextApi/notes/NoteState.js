import noteContext from "./noteContext";

const NoteState =(props)=>{
    const state ={
        "name": "Labi",
        "class": "10b"
    }
    return(
        <noteContext.Provider value={state}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;