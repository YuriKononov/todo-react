import React, { useState } from 'react'

const SearchForm =(props) => {
    
    

    const handleChange =(e) => {
       props.searchNotes(e.target.value)
        
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