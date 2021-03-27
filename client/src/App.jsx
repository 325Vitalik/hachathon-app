import React from 'react';
import { Provider } from 'react-redux';
import AddEventComponent from './AddEventPage/AddEventComponent';
import { Router } from '@reach/router';
import store from './root/store';
import SimpleMapPage from './map/simple_map_page';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <SimpleMapPage path="/" />
                    <AddEventComponent path="/add" />
                </Router>
            </Provider>
        );
    }
}
