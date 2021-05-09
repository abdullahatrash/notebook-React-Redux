import React from 'react'
import { connect } from 'react-redux'
import Note from './Note'

const ImportantNotes = ({notes}) => {
    return (
        <div className="importantNotes">
            <h5>Important Notes</h5>
            <div className="row">
        {
            notes.filter(note=>note.isImportant === true).map(note=><Note key={note.id} note={note} />)
        }      
        </div>
        </div>
    )
}

const mapStateToProps = state =>({
    notes:state.note_reducer.notes
})


export default connect(mapStateToProps)(ImportantNotes)
