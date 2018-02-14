import React, { Component } from 'react';
import ProductCard from './ProductCard';

class ProductsCard extends Component {
  render() {
    return (
      <div className="ProductHolder">
        <div className="ProductCard">
          <div className="ProductCard__item">Name</div>
          <div className="ProductCard__item">Value</div>
           <div className="ProductCard__item">ValueIncVAT</div>
           <div className="ProductCard__item">Quantity</div>
           <div className="ProductCard__item">Total</div>
          </div>
        {(this.props.products != null && this.props.products.length > 0) && this.props.products.map((product, index) => {
          return (
            <div className="" key={index}>
              <ProductCard product={product} />
            </div>
          );
        })}


      </div>
    )
  }
}

export default ProductsCard;
