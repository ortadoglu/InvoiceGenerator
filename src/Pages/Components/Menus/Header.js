import React, { Component } from 'react';
import SecondaryTopMenu from './SecondaryMenu';
import MainTopMenu from './MainMenu';


class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <MainTopMenu />
        <SecondaryTopMenu /> 
      </div>
    );
  }
}

export default Header;
