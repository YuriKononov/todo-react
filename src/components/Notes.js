import React from 'react'
import Note from './Note'

const Notes = (props) => {
    const {notes, checkNote, deleteNote} = props;
    const notesList = notes.length ? (
        notes.map(note => {
            return (
                <Note key={note.id} text = {note.text} checked = {note.checked}
                id={note.id} deleteNote={deleteNote}
                checkNote = {checkNote}/>
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

        