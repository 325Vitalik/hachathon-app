import { ADD_EVENTS } from './/eventActions';

const initialState = {
    eventsData: [],
};

export default function events(state = initialState, action) {
    switch (action.type) {
        case ADD_EVENTS:
            return { ...state, eventsData: action.events };
        default:
            return state;
    }
}
