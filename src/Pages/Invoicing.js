import React, { Component } from 'react';
import InvoiceGrid from './CustomInvoice/responsiveGrid.js';

class Invoicing extends Component {
  render() {
    return (
      <div className="Invoicing">
        <InvoiceGrid />
      </div>
    );
  }
}

export default Invoicing;