import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';

class ClientSelector extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customerIndex: 0,
    };
  }

  handleCustomerChange = (event, index, value) => {
    this.props.selectCustomer(value);
    this.setState({ customerIndex: value });
  };

  render() {
    return (
      <Paper zDepth={2} children={
        <div className="CustomerSelector">
          <DropDownMenu maxHeight={300} value={this.state.customerIndex} autoWidth={false} onChange={this.handleCustomerChange}>
            {this.props.customers.map((customer, index) => {
              return (
                <MenuItem key={index} value={index} primaryText={customer.Name} />
              );
            })}
          </DropDownMenu>
          <div>Select Customer</div>
        </div>
      } />
    );
  }
}

export default ClientSelector;
