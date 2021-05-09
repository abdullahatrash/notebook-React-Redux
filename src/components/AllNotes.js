import React from 'react'
import { useSelector } from 'react-redux'
import Note from './Note'



const AllNotes = () => {

   const notes = useSelector(state => state.note_reducer.notes)

    return (
        <div className="my-3">
           <h5>All Notes</h5>
           <div className="row">

           {
               notes.map( note => <Note key={note.id} note={note} />)
           }
           </div>
        </div>
    )
}

// const mapStateToProps = state => ({
//     notes: state.note_reducer.notes
// })

// export default connect(mapStateToProps)(AllNotes)

export default AllNotes
