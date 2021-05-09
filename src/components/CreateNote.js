import React, { useState } from 'react'
import {useDispatch } from 'react-redux';
import { add_new_note } from '../redux/actions/note.action';
// import { store } from '../redux/store';

const CreateNote = () => {
    const [note, setNote] = useState('')
    const dispatch = useDispatch()
    const handelSubmit = (e) => {
        e.preventDefault();
        const data = {
            note,
            id:Math.floor(Math.random()*1000),
            date: new Date().toJSON().slice(0,10),
            isImportant: false,
        }
        dispatch(add_new_note(data))
        
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <div className="form-group">
                    <textarea  cols="3"  
                    className="form-control"
                     placeholder="write your note :)" 
                     value={note} 
                     onChange={e=>setNote(e.target.value)}
                     >
                     </textarea>
                    <button className="btn" type="submit">Add note</button>
                </div>
            </form>
        </div>
    )
}

// const mapDisptachToprops = dispatch => {
// return {
//     add_new_note: (data)=>dispatch({ 
//         type:"ADD_NOTE",
//         payload:data

//     })
// }
// }


//export default connect(null, {add_new_note})(CreateNote)
export default CreateNote
