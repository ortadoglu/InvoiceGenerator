import React, { Component } from 'react';

import ProductRowGenerator from './CustomInvoice/ProductRowGenerator';
import ClientSelector from './CustomInvoice/ClientSelector';
import InvoiceGrid from './CustomInvoice/responsiveGrid.js';

import { stressData, products, defaultUser } from './CustomerManager/stressdata';
import './CustomInvoice/Invoice.css';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

class Invoicing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: stressData,
      products: products,
      user: defaultUser,
      customerIndex: 0,
      invoicedProducts: [],
    };
    this.selectCustomer = this.selectCustomer.bind(this);
    this.addProduct = this.addProduct.bind(this);
  }
  selectCustomer = (value) => this.setState({ customerIndex: value });

  addProduct (product, quantity) {
    this.setState({ invoicedProducts:  [...this.state.invoicedProducts ,{product, quantity}]});
  }

  render() {

    return (
      <div className="Invoicing">
        <Paper zDepth={2} children={
          <InvoiceGrid customer={this.state.customers[this.state.customerIndex]} products={this.state.invoicedProducts} user={this.state.user} />
        } />
        <div className="GridController">
          <ClientSelector customers={this.state.customers} selectCustomer={this.selectCustomer}/>
          <ProductRowGenerator products={this.state.products} addProduct={this.addProduct} />
          <RaisedButton primary backgroundColor="#a4c639"
              label="Save to PDF" />
        </div>
      </div>
    );
  }
}

export default Invoicing;