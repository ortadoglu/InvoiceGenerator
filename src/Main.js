import React, { Component } from 'react';
import Archive from './Pages/Archive.js';
import Invoicing from './Pages/Invoicing.js';
import CustomerManager from './Pages/CustomerManager/CustomerManager.js';
import ProductManager from './Pages/ProductManager/ProductManager.js';
import {Switch, Route} from 'react-router-dom';


class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Switch>
          {/* do sometyhing for home */}
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
