import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';

import CustomerCard from './CustomerCard';
import ProductsCard from './ProductsCard';
import TotalsCard from './TotalsCard';
import UserCard from './UserCard';

import './responsiveGrid.css';
import mainLogo from '../../Img/react.png';


class MyFirstGrid extends Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      { i: 'a', x: 0, y: 0, w: 3, h: 6, minH: 6, minW: 3 },
      { i: 'b', x: 3, y: 0, w: 3, h: 6, minH: 6, minW: 3 },
      { i: 'c', x: 4, y: 8, w: 6, h: 2, minH: 2, minW: 6 },
      { i: 'd', x: 0, y: 6, w: 2, h: 1, minH: 1, minW: 1 },
      { i: 'e', x: 2, y: 6, w: 6, h: 1, minH: 1, minW: 6 },
      { i: 'f', x: 0, y: 5, w: 12, h: 1, minH: 1, minW: 12, isResizable: false },
      { i: 'g', x: 0, y: 6, w: 12, h: 1, minH: 1, minW: 12, isResizable: false },
    ];
    return (
      <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={25} width={1200} compactType={null}>
        <div className="GridItem" key="a">
          <UserCard user={this.props.user} />
        </div>
        <div className="GridItem" key="b" >
          <CustomerCard customer={this.props.customer} />
        </div>
        <div className="GridItem" key="c">
          <ProductsCard className="GridItem" key="c" products={this.props.products} />
        </div>
        <div className="GridItem" key="d">
          <span>Invoice Number: </span>
          <span>12121 - 49 - 2018</span>
        </div>
        <div className="GridItem" key="e" products={this.props.products}>
          <TotalsCard products={this.props.products}/>
        </div>
        <div className="GridItem Border" key="f">
        </div>
        <div className="GridItem Border" key="g" data-grid={{x: 0, y: 0, w: 1, h: 2, static: true}}>
        </div>     
        {/* <div key={4} data-grid={{x: 6, y: 2, w: 3, h: 5, static: false}}>
           <img src ={mainLogo} /> 
        </div>  */}
      </ReactGridLayout>
    )
  }
};

export default MyFirstGrid;

