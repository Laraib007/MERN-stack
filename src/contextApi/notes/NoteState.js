import NoteContext from "./NoteContext";

const NoteState = (props)=>{
    return(
        <NoteContext.Provider>
            {props.childrens}
        </NoteContext.Provider>
    )
}
export default NoteState;
