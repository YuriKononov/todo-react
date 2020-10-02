import React, { Component } from 'react';
import{useSelector, useDispatch} from 'react-redux'
import {increment,decrement, toggle} from './actions'
import AddNote from './components/AddForm';
import Footer from './components/Footer';

import Notes from './components/Notes'
import SearchForm from './components/SearchForm';


class App extends Component {
  
  state={
    notes : [
        
    ],
    status : 'ALL',
    value : ''
    
}

  checkNote=(id) => {
    const newNotes = this.state.notes.map((note)=>{
      return {...note}
    })
    newNotes.forEach((note) => {
      if (note.id === id){
        note.checked = !note.checked
      }
    })
    this.setState({
      notes : newNotes
    })

  }

  deleteNote=(id) => {
    const notes = this.state.notes.filter(note => {
      return note.id !==id
    })
    this.setState({
      notes
    })
  }

  addNote = (note) =>{
    note.id = Math.random();
    const notes = [...this.state.notes, note]
    this.setState({
      notes
    })
  }


  showAll = () => {
    const status = 'ALL'
    this.setState({
      status
    })
  }


  showActive = () => {
    const status = 'ACTIVE'
    this.setState({
      status
    })
  }


  showCompleted = () =>{
    const status = 'COMPLETED'
    this.setState({
      status
    })
  }


  searchNotes =(value) => {
    this.setState({
      value
    })

  }


  render(){
    const { notes } = this.state;
    const checkedNotes = notes.filter(note =>{
      return note.checked === false
  })
    let filteredNotes =[]

    switch(this.state.status){
      case 'ALL' :
        filteredNotes = notes
        break;
      case 'ACTIVE':
        filteredNotes = notes.filter((note) => note.checked === false)
        break;
      case 'COMPLETED':
        filteredNotes = notes.filter((note) => note.checked === true)
        break;
      default:
        break;
    }


    return (
      <div className="App">
        <h1 className='title'>todos</h1>
        <div className="container">
          <SearchForm searchNotes = {this.searchNotes}/>
          <Notes notes={filteredNotes.filter(note => {
      return note.text.includes(this.state.value)
    })} checkNote = {this.checkNote} deleteNote ={this.deleteNote}/>
          <AddNote addNote={this.addNote}/>
          <Footer notes={filteredNotes} showCompleted = {this.showCompleted} showActive = {this.showActive} showAll={this.showAll} checkedNotes={checkedNotes}/>
          
        </div>
      </div>
    );
  }
  
}

export default App;
