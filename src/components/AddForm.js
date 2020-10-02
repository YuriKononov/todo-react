import React ,{useState} from 'react'

const AddNote =(props) => {

    
    const [text, setText] = useState('');
    const [checked, setChecked] = useState(false)

    const handleSubmit =(e) => {
        e.preventDefault();
        if(text){
            props.addNote(text, checked)
            setText('')
        }
        else{
            console.log('Empty input!')
        }
        
    }


    const handleChange =(e) => {
        setText(
            e.target.value
        )
    }
    
        return(
            <>
                <form onSubmit={handleSubmit} className="form input">
                    <input type="text" onChange={handleChange} className='new-todo' placeholder='What needs to be done?' value={text}/>
                </form>
            </>
        )
    
}

export default AddNote