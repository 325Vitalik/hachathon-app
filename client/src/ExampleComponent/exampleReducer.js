import { SEARCH_ACTION } from "./exampleActions";

const initialState={
    query:'',
}

export default function exampleReducer(state=initialState, action){
    switch (action.type){
        case SEARCH_ACTION:
            return {...state, query:action.query}
        default:
            return state
    }
}