import NoteContext from "./NoteContext";

const NoteState = (props)=>{
    const state = {
        "name": "Labi",
        "class": "10b"
    }
    return(
        <NoteContext.Provider value={state}>
            {props.childrens}
        </NoteContext.Provider>
    )
}
export default NoteState;
