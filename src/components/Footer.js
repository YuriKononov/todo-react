import React from 'react'

function Footer(props) {
    const { showCompleted, showActive, showAll, checkedNotes } = props;
    
    return (
        <div className="footer-buttons">
            <div className='count'>
                We have {checkedNotes.length} items left
            </div>
            <ul className="btns">
                <li className="filters"><button className="btn all" onClick={()=>{showAll()}}>All</button></li>
                <li className="filters"><button className="btn active" onClick={()=>{showActive()}}>Active</button></li>
                <li className="filters"><button className="btn completed" onClick={()=>{showCompleted()}}>Completed</button></li>
            </ul>
        </div>
    )
}

export default Footer
