import React, { Component } from 'react';
import './ProductCard.css';

class ProductCard extends Component {
  render() {
    return (
      <div className="ProductCard">
        <div className="ProductCard__item">{this.props.product.Name}</div>
        <div className="ProductCard__item">{this.props.product.Description}</div>
        <div className="ProductCard__item">{this.props.product.Value}</div>
        <div className="ProductCard__item">{this.props.product.ValueIncVAT}</div>
      </div>
    );
  }
}

export default ProductCard;
