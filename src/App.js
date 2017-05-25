import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore } from 'redux';
import reducers from './reducers';

import LoginForm from './components/LoginForm';

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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}
