
import React ,{useState} from 'react';
import{useSelector, useDispatch} from 'react-redux';
import {deleteNote, checkNote} from '../actions';


const Note = (props) =>{

    const dispatch = useDispatch();
    const {text, checked, id} = props;

    return(
        <div className="added">
            <span className={"checkPlace " + (checked ? "done" : "")}
             onClick={()=>{dispatch(checkNote(id))}}></span>
            <h4 className={'sub-title ' + (checked ? "done-sub-title" :"")}
             onClick={()=>{dispatch(checkNote(id))}}>{text}</h4>
            <span className="del" onClick={()=>{dispatch(deleteNote(id))}}>❌</span>
        </div>
    )
}

export default Note