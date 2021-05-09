import {createStore, applyMiddleware, combineReducers} from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import note_reducer from "./reducers/notes.reducer"

import thunk from "redux-thunk"

const rootReducer = combineReducers({note_reducer})

const middleware = [thunk]


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))