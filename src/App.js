import React, { useState } from 'react';
import{useSelector, useDispatch} from 'react-redux'
import {increment,decrement, toggle} from './actions'
import AddNote from './components/AddForm';
import Footer from './components/Footer';
import uuid from 'uuid/v1'
import Notes from './components/Notes'
import SearchForm from './components/SearchForm';


function App() {
 
  const [notes, setNotes] = useState([]);
  const [status, setStatus] = useState('ALL');
  const [searchValue, setSearchValue] = useState('');



  const checkNote=(id) => {
    const newNotes = notes.map((note)=>({...note}));
    newNotes.forEach((note) => {
      if (note.id === id){
        note.checked = !note.checked
      }
    })
    setNotes(newNotes);
    console.log('Notes after adding new one', notes);
  }

  console.log('Current state', notes)


  const deleteNote=(id) => {
    setNotes( notes.filter(note => {
        return note.id !==id
      })
    )
  }

  const addNote = (text, checked) =>{
    const id = uuid();
    setNotes(
      [...notes, {text, checked, id}]
    )
  }


  const showAll = () => {
    const status = 'ALL'
    
    setStatus(
      status
    )
    console.log(status)
  }


  const showActive = () => {
    const status = 'ACTIVE'
    setStatus(
      status
    )
    console.log(status)
  }


  const showCompleted = () =>{
    const status = 'COMPLETED'
    setStatus(status)
    console.log(status)
  };


  const searchNotes =(searchValue) => {
    setSearchValue(searchValue)}


  
  const checkedNotes = notes.filter(note =>{
    return note.checked === false
  })
  let filteredNotes =[]

  switch(status){
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
        <SearchForm
         searchNotes = {searchNotes}/>
        <Notes
          notes={filteredNotes.filter(note => 
          {return note.text.includes(searchValue)})} 
          checkNote = {checkNote}
          deleteNote ={deleteNote}/>
        <AddNote addNote={addNote}/>
        <Footer 
          showCompleted = {showCompleted} 
          showActive = {showActive} 
          showAll={showAll} 
          checkedNotes={checkedNotes}
        /> 
      </div>
    </div>
  );

  
}
  
export default App;
