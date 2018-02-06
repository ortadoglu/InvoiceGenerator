import React, { Component } from 'react';
import Grid from '../Components/Grid'
import Selector from '../Components/Selector'

import './ProductManager.css';


class ProductManager extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  render() {
    const columns = [
			{
				Header: 'Id',
				accessor: 'Id',
				Cell: props => <span className='number'>{props.value}</span>,
				width: 100
			},
			{
				Header: 'Name',
				accessor: 'Name'
			},
			{
				Header: 'Description',
				accessor: 'Description',
				width: 400
			},
			{
				id: 'taxId',
				Header: 'Tax id',
				accessor: d => d.TaxGroup.Id,
				width: 100
			},
			{
				id: 'taxValue',
				Header: 'Tax value',
				accessor: d => d.TaxGroup.TaxValue,
				width: 100
			},
			{
				Header: 'Value',
				accessor: 'Value'

			},
			{
				Header: 'ValueIncVAT',
				accessor: 'ValueIncVAT'

			}]
    const data = [{
      Description: 'Big screen TV.',
      Id: 26,
      Name: 'Genereic TV',
      TaxGroup: {
        TaxValue: 25,
        Id: 1,
      },
      Value: 1455,
      ValueIncVAT: 1600
    },
    {
      Description: 'The new and best product from Apple',
      Id: 20,
      Name: 'Ipad',
      TaxGroup: {
        TaxValue: 25,
        Id: 1,
      },
      Value: 500,
      ValueIncVAT:4000
    },
    {
      Description: 'JUST SK8',
      Id: 1,
      Name: 'Roller blades',
      TaxGroup: {
        TaxValue: 25,
        Id: 1,
      },
      Value: 100,
      ValueIncVAT: 125
    },
    {
      Description: 'This ball is rounder!',
      Id: 2,
      Name: 'Ball',
      TaxGroup: {
        TaxValue:250,
        Id: 1,
      },
      Value: 200,
      ValueIncVAT: 250
    },
    {
      Description: 'A small drone designed for kids',
      Id: 126,
      Name: 'Quadcopter',
      TaxGroup: {
        TaxValue: 0,
        Id: 2,
      },
      Value: 100,
      ValueIncVAT: 100
    },
    {
      Description: 'Handcrafted steel chair',
      Id: 11,
      Name: 'Chair',
      TaxGroup: {
        TaxValue: 0,
        Id: 2,
      },
      Value: 874,
      ValueIncVAT: 874
    },
    {
      Description: 'Handcrafted wood chair',
      Id: 12,
      Name: 'Chair',
      TaxGroup: {
        TaxValue: 0,
        Id: 2,
      },
      Value: 1230,
      ValueIncVAT: 1230
    },
    {
      Description: 'Handcrafted redwood chair',
      Id: 31,
      Name: 'Chair',
      TaxGroup: {
        TaxValue: 0,
        Id: 2,
      },
      Value: 1400,
      ValueIncVAT: 1400
    },
  ]

    return (
      <div className="ProductManager">
       <Selector fields={columns} label="Add another product"/>
       <Grid data={data} columns={columns}/>
      </div>
    );
  }
}

export default ProductManager;
