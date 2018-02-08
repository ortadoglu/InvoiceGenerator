import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    return (
      <div className="ProductCard">
        <div className="ProductCard__item">{this.props.product.product.Name}</div>
        <div className="ProductCard__item">{this.props.product.product.Value}</div>
        <div className="ProductCard__item">{this.props.product.product.ValueIncVAT}</div>
        <div className="ProductCard__item">{this.props.product.quantity}</div>
        <div className="ProductCard__item">{this.props.product.product.ValueIncVAT * this.props.product.quantity }</div>
      </div>
    );
  }
}
export default ProductCard;
