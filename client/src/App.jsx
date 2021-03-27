import React from 'react';
import { Provider } from 'react-redux';
import AddEventComponent from './AddEventPage/AddEventComponent';
import store from './root/store';

export default class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <AddEventComponent />
      </Provider>
    );
  }
}
