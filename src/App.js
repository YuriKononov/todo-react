  import React, { useState } from 'react';
  import{useSelector, useDispatch} from 'react-redux'
  import AddNote from './components/AddForm';
  import Notes from './components/Notes'
  import Footer from './components/Footer'
  import SearchForm from './components/SearchForm';


  function App() {
    

  return (
    <div className="App">
      <h1 className='title'>todos</h1>
      <div className="container">
        <SearchForm />
        <Notes/>
        <AddNote/> 
        <Footer/>
      </div>
    </div>
  );

  
}
  
export default App;