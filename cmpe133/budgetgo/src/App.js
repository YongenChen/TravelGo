import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyA1zuYWzd5VjWeuHVKjT3EGirUyeDHYfAM',
        authDomain: 'budgetgo-db133.firebaseapp.com',
        databaseURL: 'https://budgetgo-db133.firebaseio.com',
        projectId: 'budgetgo-db133',
        storageBucket: 'budgetgo-db133.appspot.com',
        messagingSenderId: '86438772863',
        appId: '1:86438772863:web:622a411af80710adb73f4a',
        measurementId: 'G-SL4J9YGQ62',
      });
    }
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

export default App;
