import React, { Component } from 'react';
import './CustomerManager.css';

import Grid from '../Components/Grid'
import Selector from '../Components/Selector'

import * as firebase from 'firebase';


class CustomerManager extends Component {
  constructor(props) {
    super(props);
    this.state = { customers: [] };
    this.updateHandler = this.updateHandler.bind(this);
  }

  componentDidMount() {
    this.populateState();
  }

  populateState() {
    let tempThis = this;
    firebase.database()
      .ref(`tokens/NhqydOhq3ncaTII4MPpZpfu1cVI2/customers/`)
      .once('value')
      .then(function (usersSnapshot) {
        var userData = usersSnapshot.val();
        tempThis.setState({
          customers: Object.keys(userData).map((id) => {
            userData[id]["Id"] = id;
            return userData[id]
          })
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  updateHandler(item) {

    firebase.database().ref('tokens/NhqydOhq3ncaTII4MPpZpfu1cVI2/customers/' + item.Id).set({
      Name: (item.Name || ""),
      Email: (item.Email || ""),
      PhoneNumber: (item["Phone Number"] || ""),
      Address: (item.Address || ""),
      Country: (item.Country || ""),
      Company: (item.Company || "")
    })

    this.populateState();
  }

  render() {

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
         <Grid data={this.state.customers} columns={columns}/>
        </div>
      );
  }
}

export default CustomerManager;