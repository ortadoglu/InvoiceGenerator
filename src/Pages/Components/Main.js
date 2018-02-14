import React, { Component } from 'react';
import Archive from '../Archive/Archive';
import Invoicing from '../CustomInvoiceGenerator';
import CustomerManager from '../CustomerManager/CustomerManager.js';
import ProductManager from '../ProductManager/ProductManager.js';
import {Switch, Route} from 'react-router-dom';


class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Switch>
          <Route path='/archive' component={Archive} />
          <Route path='/invoicing' component={Invoicing} />
          <Route path='/customer' component={CustomerManager} />
          <Route path='/product' component={ProductManager} />
        </Switch>
      </div>
    );
  }
}

export default Main;
