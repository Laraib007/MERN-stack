import NoteContext from "./NoteContext";


const useNoteContext = (props) =>{
    const state ={
        "name": "Labi",
        "class": "5b"
    }
    return(
        <NoteContext.Provider value={state} >
            {props.childern}
        </NoteContext.Provider>
    )
} 

export default useNoteContext;
