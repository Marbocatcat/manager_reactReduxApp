import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Router from './Router';


export default class App extends Component {
  componentWillMount() {
    const config = {
       apiKey: 'AIzaSyA0Loa6OflCmaRMY9e-w0a6-E28Bt7Jq2Q',
       authDomain: 'manager-57eb6.firebaseapp.com',
       databaseURL: 'https://manager-57eb6.firebaseio.com',
       projectId: 'manager-57eb6',
       storageBucket: 'manager-57eb6.appspot.com',
       messagingSenderId: '96654656289'
 };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
