import React ,{Component} from 'react'

class AddNote extends Component{

    state ={
        text:'',
        checked:false
    }

    handleSubmit =(e) => {
        e.preventDefault();
        if(this.state.text){
            this.props.addNote(this.state)
            console.log(this.state)
            this.setState({
                text:''
            })
        }
        else{
            console.log('Empty input!')
        }
        
    }


    handleChange =(e) => {
        this.setState({
            text:e.target.value
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} className="form input">
                    <input type="text" onChange={this.handleChange} className='new-todo' placeholder='What needs to be done?' value={this.state.text}/>
                </form>
            </div>
        )
    }
}

export default AddNote