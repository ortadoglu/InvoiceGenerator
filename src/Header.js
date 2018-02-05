import React, { Component } from 'react';
import SecondaryTopMenu from './Menus/SecondaryMenu';
import MainTopMenu from './Menus/MainMenu';


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
