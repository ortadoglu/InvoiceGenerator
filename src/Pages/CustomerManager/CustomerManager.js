import React, { Component } from 'react';
import './CustomerManager.css';

import Grid from '../Components/Grid'
import Selector from '../Components/Selector'

import { stressData } from './stressdata';


class CustomerManager extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }


  render() {
    const data = stressData;

    const columns = [
      {
        Header: 'Id',
        accessor: 'Id',
        width: 100
      },
      {
        Header: 'Name',
        accessor: 'Name',
      },
      {
        Header: 'Company',
        accessor: 'Company',
      }, 
      {
        Header: 'Email',
        accessor: 'Email',
        width: 200
      },
      {
        Header: 'Phone Number',
        accessor: 'Phone Number',
        width: 200
      },
      {
        Header: 'Address',
        accessor: 'Address'
      },
      {
        Header: 'Zip code',
        accessor: 'Zip code'
      },   
      {
        Header: 'Country',
        accessor: 'Country'
      },]

      return (
        <div className="CustomerManager">
         <Selector fields={columns} label="Add another customer"/>
         <Grid data={data} columns={columns}/>
        </div>
      );
  }
}

export default CustomerManager;