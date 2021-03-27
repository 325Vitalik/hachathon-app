import {combineReducers} from "redux";
import events from '../AddEventPage/eventReducer';

const rootReducer=combineReducers({
    events
})

export default rootReducer;