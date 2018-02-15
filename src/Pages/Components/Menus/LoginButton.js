import React, { Component } from 'react';

import IconButton from 'material-ui/IconButton';
import CircleIcon from 'material-ui/svg-icons/action/account-circle';
import XIcon from 'material-ui/svg-icons/content/clear';

import * as firebase from "firebase";

class LoginButton extends Component {

  auth() {
    var tempThis = this;
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      tempThis.props.onLoginAnswer({uid: result.user.uid, Name: result.user.Name});
    })
      .catch(function (error) {
        console.log(error)
      });
  }

  signOut() {
    var tempThis = this;
    firebase.auth().signOut().then(function () {
      tempThis.props.onLoginAnswer("Logged Off");
    }).catch(function (error) {
      console.log(error)
    });
  }

  render() {
    return (
      <div>
        {(this.props.loggedIn === 'Logged Off') &&
          // <IconButton tooltip={this.props.translate('login')} tooltipPosition="bottom-right" onClick={() => this.auth()}><CircleIcon /></IconButton>
          <IconButton onClick={() => this.auth()}><CircleIcon /></IconButton>
        }
        {(this.props.loggedIn !== 'Logged Off') &&
          <IconButton onClick={() => this.signOut()}><XIcon /></IconButton>
        }
      </div>
    )
  }
}

export default LoginButton