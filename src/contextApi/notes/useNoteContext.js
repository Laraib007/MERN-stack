import NoteContext from "./NoteContext";


const useNoteContext = (props) =>{
    const state ={
        "name": "Labi",
        "class": "5b"
    }
    return(
        <NoteContext.Provider value={state} >
            {props.children}
        </NoteContext.Provider>
    )
} 

export default useNoteContext;
