
import React ,{useState} from 'react';
import{useSelector, useDispatch} from 'react-redux';
import { checkNote, allActiveNotes, allCompletedNotes, allNotes } from '../actions';

function Footer() {
    
    
    const notes = useSelector(state => state.notes)
    console.log(notes)
    const dispatch = useDispatch()
    const activeNotes = notes.filter(note =>{
        return note.checked === false
      })


    return (
        <div className="footer-buttons">
            <div className='count'>
                We have {activeNotes.length} items left
            </div>
            <ul className="btns">
                <li className="filters"><button className="btn all" onClick={()=>{dispatch(allNotes())}}>All</button></li>
                <li className="filters"><button className="btn active" onClick={()=>{dispatch(allActiveNotes())}}>Active</button></li>
                <li className="filters"><button className="btn completed" onClick={()=>{dispatch(allCompletedNotes())}}>Completed</button></li>
            </ul>
        </div>
    )
}

export default Footer
