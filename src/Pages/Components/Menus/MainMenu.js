import React, { Component } from 'react';
import './MainMenu.css';
import LoginContainer from '../../../Containers/LoginButtonContainer'


class MainTopMenu extends Component {
  render() {
    return (
      <div className="MainTopMenu">
        <div className="Main__items">
          <div className="Header-title">Invoice Generator</div>
          {/* <div className="Header-item"><Link exact="true" to='/supplier'>Supplier invoice</Link></div>
          <div className="Header-item"><Link exact="true" to='/customer'>Customer invoice</Link></div>
          <div className="Header-item"><Link exact="true" to='/management'>Management</Link></div> */}
        </div>
        <LoginContainer/>
      </div>
    );
  }
}

export default MainTopMenu;
