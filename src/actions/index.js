

export const addNewNote = (todoItem) => {
    return{
        type: 'ADD_NOTE',
        todoItem
    }
}

export const deleteNote = (id) => {
    return{
        type: 'DELETE_NOTE',
        id
    }
}

export const checkNote = (id) => {
    return{
        type: 'CHECK_NOTE',
        id
    }
}

export const allNotes = () => {
    return{
        type: 'ALL'
    }
}

export const allCompletedNotes = () => {
    return{
        type: 'ALL_COMPLETED'
    }
}

export const allActiveNotes = () => {
    return{
        type: 'ALL_ACTIVE'
    }
}

export const searchNotes = (value) => {
    return{
        type: 'SEARCH_NOTES',
        value
    }
}
