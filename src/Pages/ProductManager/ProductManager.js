import React, { Component } from 'react';
import Grid from '../Components/Grid'
import Selector from '../Components/Selector'

import './ProductManager.css';
import * as firebase from 'firebase';


class ProductManager extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.updateHandler = this.updateHandler.bind(this);
  }

  componentDidMount() {
    this.populateState();
  }

  populateState() {
    let tempThis = this;
    firebase.database()
      .ref(`users/`)
      .once('value')
      .then(function (usersSnapshot) {
        var userData = usersSnapshot.val();
        tempThis.setState({
          products: Object.keys(userData).map((id) => {
            userData[id]["Id"] = id;
            userData[id]["ValueIncVAT"] = userData[id]["Value"] * (1+ userData[id]["TaxGroup"]["TaxValue"]/100);
            return userData[id]
          })
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  updateHandler(item) {
    firebase.database().ref('users/' + item.Id).set({
      Description: (item.Description || ""),
      Name: (item.Name || ""),
      TaxGroup: {
        TaxValue: (item["Tax value"] || ""),
        Id: (item["Tax id"] || ""),
      },
      Value: (item.Value || ""),
    });
    this.populateState();
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

    return (
      <div className="ProductManager">
        <Selector fields={columns} label="Add another product" updateHandler={this.updateHandler} />
        <Grid data={this.state.products} columns={columns} />
      </div>
    );
  }
}

export default ProductManager;
