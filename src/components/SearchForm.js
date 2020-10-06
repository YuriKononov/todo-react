import React ,{useState} from 'react';
import {searchNotes} from '../actions';
import{useSelector, useDispatch} from 'react-redux';



const SearchForm =() => {
    
    const dispatch = useDispatch();


    const handleChange =(e) => {
       dispatch(searchNotes(e.target.value))
        
    }

    const searchSubmit = (e) =>{
        e.preventDefault()
    }

    return(
        <div>
            <form onSubmit={searchSubmit} className="form search">
            <input type="text" className='new-todo' placeholder='What do you want to find?' onChange={handleChange}/>
            </form>
        </div>
    )
    
}
export default SearchForm