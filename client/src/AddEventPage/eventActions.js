import { navigate } from '@reach/router';
import { config } from '../config';

export const ADD_EVENTS = 'ADD_EVENTS';

export function addEvent({ name = '', locationCoordinates = null, type = '', description = '' }) {
    return (dispatch) => {
        const url = new URL(`${config.}/api/event`);

        if (!locationCoordinates) {
            return;
        }

        const event = {
            name,
            type,
            description,
            location: {
                type: 'Point',
                coordinates: [locationCoordinates.lng, locationCoordinates.lat],
            },
        };

        fetch(url, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(event),
        }).then((response) => {
            if (!response.ok) {
                console.error(response);
            } else {
                navigate('/');
            }
        });
    };
}

export function getEventsFromDb() {
    return (dispatch) => {
        const url = new URL('http://localhost:5000/api/events');

        fetch(url).then(async (response) => {
            if (response.ok) {
                dispatch({
                    type: ADD_EVENTS,
                    events: await response.json(),
                });
            } else {
                console.warn(response);
            }
        });
    };
}

export function getEventsFromDbWithFilter(query) {
    return (dispatch) => {
        const url = new URL('http://localhost:5000/api/filtered');

        fetch(url, {
            method: 'post',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(query),
        }).then(async (response) => {
            if (response.ok) {
                dispatch({
                    type: ADD_EVENTS,
                    events: await response.json(),
                });
            } else {
                console.warn(response);
            }
        });
    };
}
