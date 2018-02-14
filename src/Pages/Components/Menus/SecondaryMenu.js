import React, { Component } from 'react';
import './SecondaryMenu.css';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

class SecondaryTopMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: "" };
  }

  changeSelected(value) {
    this.setState({ selected: value });
  }

  render() {
    return (
      <div className="SecondaryTopMenu">
        <div className={classnames("Second-Header__item", { "Second-Header--selected": this.state.selected === "Archive" })} >
          <Link to='/archive' onClick={() => this.changeSelected("Archive")}>Archive</Link>
        </div>
        <div className={classnames("Second-Header__item", { "Second-Header--selected": this.state.selected === "Invoicing" })}>
          <Link to='/invoicing' onClick={() => this.changeSelected("Invoicing")}>Invoicing</Link>
        </div>
        <div className={classnames("Second-Header__item", { "Second-Header--selected": this.state.selected === "Customer Manager" })}>
          <Link to='/customer' onClick={() => this.changeSelected("Customer Manager")}>Customer Manager</Link>
        </div>
        <div className={classnames("Second-Header__item", { "Second-Header--selected": this.state.selected === "Product Manager" })}>
          <Link to='/product' onClick={() => this.changeSelected("Product Manager")}>Product Manager </Link>
        </div>
      </div>
    );
  }
}

export default SecondaryTopMenu;
