import React, { Component } from 'react';
import InvoiceGrid from './CustomInvoice/responsiveGrid.js';
import './CustomInvoice/Invoice.css';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

import { stressData, products } from './CustomerManager/stressdata';

class Invoicing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: stressData,
      prod: products,
      user: { "Name": "Mircea Pienar", "Email": "mircea.pienar@gmail.com", "Phone Number": "48-(265)190-9055", "Address": "Campionilor nr. 5", "Country": "Romania", "Company": "Azets" },
      customerIndex: 0,
      productIndex: 0,
    };
  }
  handleCustomerChange = (event, index, value) => this.setState({ customerIndex: value });
  handleProductChange = (event, index, value) => this.setState({ productIndex: value });

  render() {

    return (
      <div className="Invoicing">
        <Paper zDepth={2} children={
          <InvoiceGrid customer={this.state.customers[this.state.customerIndex]} products={this.state.prod} user={this.state.user} />
        } />
        <div className="GridController">
          <Paper zDepth={2} children={
            <div className="CustomerSelector">
              <div>Select Customer</div>
              <DropDownMenu maxHeight={300} value={this.state.customerIndex} onChange={this.handleCustomerChange}>
                {this.state.customers.map((customer, index) => {
                  return (
                    <MenuItem value={index} primaryText={customer.Name} />
                  );
                })}
              </DropDownMenu>
            </div>
          } />
          <Paper zDepth={2} children={
            <div className="ProductSelector">
              <div>Add product</div>
              <DropDownMenu maxHeight={300} value={this.state.productIndex} onChange={this.handleProductChange}>
                {this.state.prod.map((product, index) => {
                  return (
                    <MenuItem value={index} primaryText={product.Name} />
                  );
                })}
              </DropDownMenu>
            </div>
          } />

        </div>
      </div>
    );
  }
}

export default Invoicing;