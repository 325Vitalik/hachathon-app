export const ADD_EVENT = 'ADD_EVENT';

export function addEvent({ name = '', locationCoordinates = null, type = '', description = '' }) {
    return (dispatch) => {
        const url = new URL('http://localhost:5000/api/event');

        if(!locationCoordinates) {
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
            }
        });
    };
}
