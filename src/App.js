import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import AllNotes from './components/AllNotes'
import CreateNote from './components/CreateNote'
import ImportantNotes from './components/ImportantNotes'
import { load_notes } from './redux/actions/note.action'
import { store } from './redux/store'

const App = ({loading}) => {

useEffect(() => {
 store.dispatch(load_notes())
}, [])


    return (
        <div className="container mt-3 p-3">
            <CreateNote />
            <hr/>
            {
                loading &&  
                <div className="text-center">
                      <div className="spinner-border my-3"/>
                </div>
              
            }
           
            <ImportantNotes />
            <hr/>
            <AllNotes />
        </div>
    )
}

const mapStateToProps = state => ({
    loading:state.note_reducer.loading
})

export default  connect(mapStateToProps)(App)
