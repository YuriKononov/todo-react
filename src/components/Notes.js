
import Note from './Note'
import React ,{useState} from 'react';
import{useSelector, useDispatch} from 'react-redux';

const Notes = () => {
    

    const notes = useSelector(state => state.notes);
    const status = useSelector(state => state.status)
    const searchValue = useSelector(state => state.searchValue)
    let filteredNotes =[]

    switch(status){
        case 'ALL' :
            filteredNotes = notes.filter(note => {return note.text.includes(searchValue)})
            break;
        case 'ALL_ACTIVE':
            filteredNotes = notes.filter((note) => note.checked === false).filter(note => 
                {return note.text.includes(searchValue)})
            break;
        case 'ALL_COMPLETED':
            filteredNotes = notes.filter((note) => note.checked === true).filter(note => 
                {return note.text.includes(searchValue)})
            break;
        default:
            break;
    }
    
    const notesList = filteredNotes.length ? (
        filteredNotes.map(note => {
            return (
                <Note key={note.id} text = {note.text} checked = {note.checked}
                id={note.id}/>
            )
        })
    ) : (
        null
    )

        return(
            <div className='notes'>
                {notesList}
            </div>
            
        )
}

export default Notes
    