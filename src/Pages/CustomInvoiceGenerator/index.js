import React, { Component } from 'react';

import ProductRowGenerator from './ProductRowGenerator';
import ClientSelector from './ClientSelector';
import InvoiceGrid from './responsiveGrid.js';
import PaperButton from './PaperButton';

import { stressData, products, defaultUser } from '../CustomerManager/stressdata';
import './Invoice.css';

import html2pdf from 'html2pdf.js'

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
    this.addProduct = this.addProduct.bind(this);
  }
  selectCustomer = (value) => this.setState({ customerIndex: value });

  addProduct (product, quantity) {
    this.setState({ invoicedProducts:  [...this.state.invoicedProducts ,{product, quantity}]});
  }

  addDivider () {
    console.log("sdadsdasd");
  }

  saveToPDF () {
    console.log('we are gucci');
    var element = document.getElementById('thisWePrint');
    html2pdf(element, {
      margin:       1,
      filename:     'myfile.pdf',
      image:        { type: 'png', quality: 1 },
      html2canvas:  { dpi: 192, letterRendering: true },
      jsPDF:        { unit: 'cm', format: 'letter', orientation: 'portrait' }
    });

  }


  render() {
    return (
      <div id="thisWePrint" className="Invoicing">
        <InvoiceGrid customer={this.state.customers[this.state.customerIndex]} products={this.state.invoicedProducts} user={this.state.user} />
        <div className="GridController">
          <ClientSelector customers={this.state.customers} selectCustomer={this.selectCustomer}/>
          <ProductRowGenerator products={this.state.products} addProduct={this.addProduct} />
          <PaperButton clickHandler={this.addDivider} title={"Add divider"}/>
          <PaperButton clickHandler={this.saveToPDF} title={"Save to PDF"}/>
        </div>
      </div>
    );
  }
}

export default Invoicing;