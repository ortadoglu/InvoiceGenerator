import React, { Component } from 'react';
import './App.css';
import Main from './Main.js';
import Header from './Header.js';

import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBSr4dGFt5Jbqmf4cvi18opigJs8KHg-90",
  authDomain: "invoicegenerator-2dca2.firebaseapp.com",
  databaseURL: "https://invoicegenerator-2dca2.firebaseio.com",
  projectId: "invoicegenerator-2dca2",
  storageBucket: "invoicegenerator-2dca2.appspot.com",
  messagingSenderId: "794184624001"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
