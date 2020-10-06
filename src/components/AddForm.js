import React ,{useState} from 'react';
import{useSelector, useDispatch} from 'react-redux';
import uuid from 'uuid/v1'
import  {addNewNote} from '../actions';

const AddNote =() => {

    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        if(text){
            const todoItem ={text, checked:false, id:uuid()};
            console.log(todoItem)
            dispatch(addNewNote(todoItem));
            setText('')
        }
        else{
            console.log('Empty input!')
        }
        
    }
    const changeHandler = (e) => {
        setText(e.target.value);
    }
        return(
                <form  className="form input" onSubmit={submitHandler}>
                    <input type="text" className='new-todo' onChange={changeHandler} placeholder='What needs to be done?' value={text}/>
                </form>
        )
    
}

export default AddNote