import React from 'react'

const Note = (props) =>{

    const {text, checked, id, checkNote, deleteNote} = props;

    return(
        <div className="added">
            <span className={"checkPlace " + (checked ? "done" : "")}
             onClick={()=>{checkNote(id)}}></span>
            <h4 className={'sub-title ' + (checked ? "done-sub-title" :"")}
             onClick={()=>{checkNote(id)}}>{text}</h4>
            <span className="del" onClick={()=>{deleteNote(id)}}>❌</span>
        </div>
    )
}

export default Note