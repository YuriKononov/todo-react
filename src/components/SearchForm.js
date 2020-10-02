import React, { Component } from 'react'

 class SearchForm extends Component{
    


    handleChange =(e) => {
        this.props.searchNotes(e.target.value)
        
    }

    render(){
        

        const searchSubmit = (e) =>{
            e.preventDefault()
            }

        return(
            <div>
                <form onSubmit={searchSubmit} className="form search">
                    <input type="text" className='new-todo' placeholder='What do you want to find?' onChange={this.handleChange}/>
                </form>
            </div>
        )
    }
    }
    

    



export default SearchForm