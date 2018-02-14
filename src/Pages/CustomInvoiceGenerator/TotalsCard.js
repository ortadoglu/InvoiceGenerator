import React, { Component } from 'react';

class TotalsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      totalInclVAT: 0,
    };
  };

  reducer = (accumulator, currentValue) => accumulator + currentValue;

  componentWillReceiveProps(nextProps) {
    let total = 0;
    let totalInclVAT = 0;
    nextProps.products.map((product) => {
      total += product.product.Value * product.quantity;
      totalInclVAT += product.product.ValueIncVAT * product.quantity;
    });
    this.setState({ total, totalInclVAT });

  }
  render() {
    return (
      <div className="TotalsHolder">
        Total : {this.state.total}            VAT :  {this.state.totalInclVAT - this.state.total}      Totalincl VAT: {this.state.totalInclVAT}
      </div>
    );
  }
}
export default TotalsCard;
