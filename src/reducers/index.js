


const getInitialState = () => ({
    notes : [],
    status : 'ALL',
    searchValue : ''
  });


const todoReducers = (state = getInitialState(), action) => {
    switch(action.type){
        case 'ADD_NOTE':
            console.log(action.type);
            return {...state,
                    notes: [...state.notes, action.todoItem]};
        
        
        case 'CHECK_NOTE':
            console.log(action.type);
            const checkNotes = state.notes.map((note)=>({...note}));
            checkNotes.forEach((note) => {
                if (note.id === action.id){
                    note.checked = !note.checked;
                    };
                });

            return {...state,
                    notes: checkNotes};

        case 'DELETE_NOTE':
            console.log(action.type);
            const newNotes = state.notes.filter((note) => {
                return note.id !== action.id
              });
            return {...state,
                    notes : newNotes};

        case 'ALL':
            return {...state,
                    status: "ALL"};
        case 'ALL_COMPLETED':
            return {...state,
                    status: "ALL_COMPLETED"};
        case 'ALL_ACTIVE':
            return {...state,
                    status: "ALL_ACTIVE"};

        case 'SEARCH_NOTES':
            return {...state,
                    searchValue : action.value}

        default:
            return state;
    }
}

export default todoReducers

