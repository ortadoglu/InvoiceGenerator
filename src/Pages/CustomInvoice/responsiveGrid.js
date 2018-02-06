import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';

import CustomerCard from './CustomerCard';
import ProductCard from './ProductCard';
import UserCard from './UserCard';

import './responsiveGrid.css';


class MyFirstGrid extends Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      { i: 'a', x: 0, y: 0, w: 3, h: 6, minH: 6, minW: 3 },
      { i: 'b', x: 1, y: 0, w: 3, h: 6, minH: 6, minW: 3 },
      { i: 'c', x: 4, y: 0, w: 3, h: 12, minH: 2, minW: 3 }
    ];
    return (
      <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200} verticalCompact={false}>
        <div className="GridItem" key="a">
          <UserCard user={this.props.user} />
        </div>
        <div className="GridItem" key="b" >
          <CustomerCard customer={this.props.customer} />
        </div>
        <div className="GridItem" key="c">
        {this.props.products.map(function (product, index) {
          return (
            <div className="GridItem" key="index">
            <ProductCard product={product} />
          </div>
          );
        })} 
        </div>
      </ReactGridLayout>
    )
  }
};

export default MyFirstGrid;

