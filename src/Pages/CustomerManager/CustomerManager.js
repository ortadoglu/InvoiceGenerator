import React, { Component } from 'react';
import './CustomerManager.css';


import ReactTable from 'react-table'
import 'react-table/react-table.css'




class CustomerManager extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }







  render() {
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
  
  ]


    const columns = [
      {
        Header: 'Id',
        accessor: 'Id',
        Cell: props => <span className='number'>{props.value}</span>, // Custom cell components!,
        width: 100
      },
      {
        Header: 'Name',
        accessor: 'Name',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
      },
      {
        Header: 'Description',
        accessor: 'Description',
        width: 400
      }, 
      {
        id: 'taxId', // Required because our accessor is not a string
        Header: 'Tax id',
        accessor: d => d.TaxGroup.Id, // Custom value accessors!
        width: 100
      },
      {
        id: 'taxValue', // Required because our accessor is not a string
        Header: 'Tax value',
        accessor: d => d.TaxGroup.TaxValue,
        width: 100
      },
      {
        Header: props => <span>Value</span>, // Custom header components!
        accessor: 'Value'

      },
      {
        Header: props => <span>ValueIncVAT</span>, // Custom header components!
        accessor: 'ValueIncVAT'

      }]

    return (
      <div className="CustomerManager">
        <ReactTable
          data={data}
          columns={columns}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]).startsWith(filter.value)}
            defaultPageSize={10}

        />
        <div onClick={() => this.writeUserData('ceva', 'cevasadsa', 3, 2)}>click me!</div>
      </div>
    );
  }
}

export default CustomerManager;


// import React, { Component } from 'react';
// import './CustomerManager.css';


// import ReactTable from 'react-table'
// import 'react-table/react-table.css'

// import * as firebase from 'firebase'
// import * as firestore from 'firebase/firestore'


// class CustomerManager extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { items: [] };
//   }

//   auth() {
//     var tempThis = this;
//     var provider = new firebase.auth.GoogleAuthProvider();
//     provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
//     firebase.auth().signInWithPopup(provider).then(function (result) {
//       tempThis.props.onLoginAnswer("Logged In");
//     })
//       .catch(function (error) {
//         // add something here
//       });
//   }

//   signOut() {
//     var tempThis = this;
//     firebase.auth().signOut().then(function () {
//       tempThis.props.onLoginAnswer("Logged Off");
//     }).catch(function (error) {
//       console.log(error);
//     });
//   }

//   componentWillMount() {
//     var tempThis = this;
//     var provider = new firebase.auth.GoogleAuthProvider();
//     provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
//     firebase.auth().signInWithPopup(provider).then(function (result) {
//       tempThis.props.onLoginAnswer("Logged In");
//     })
//       .catch(function (error) {
//         console.log(error);
//       });

//     this.firebaseRef = firebase.database().ref("users");
//     this.firebaseRef.on("child_added", function (dataSnapshot) {
//       // this.items.push(dataSnapshot.val());
//       // this.setState({
//       //   items: this.items
//       // });
//     }.bind(this));
//     console.log(this.firebaseRef);
//     console.log(this.firebaseRef.once('value'));

//   }

//   componentWillUnmount() {
//     this.firebaseRef.off();
//   }

//   writeUserData(userId, name, email, imageUrl) {
//     firebase.database().ref('users/' + userId).set({
//       username: name,
//       email: email,
//       profile_picture: imageUrl
//     });
//   }

//   render() {
//     const data = [{
//       Description: 'Ceva descriere mai lunga dar nu chiar lunga',
//       Id: 26,
//       Name: 'Primul',
//       TaxGroup: {
//         TaxValue: 0,
//         Id: 1,
//       },
//       Value: 123,
//       ValueIncVAT: 123
//     },]


//     const columns = [
//       {
//         Header: 'Id',
//         accessor: 'Id',
//         Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
//       },
//       {
//         Header: 'Name',
//         accessor: 'Name',
//         Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
//       },
//       {
//         Header: 'Description',
//         accessor: 'Description' // String-based value accessors!
//       }, {
//         id: 'taxId', // Required because our accessor is not a string
//         Header: 'Tax id',
//         accessor: d => d.TaxGroup.Id // Custom value accessors!
//       },
//       {
//         id: 'taxValue', // Required because our accessor is not a string
//         Header: 'Tax value',
//         accessor: d => d.TaxGroup.TaxValue // Custom value accessors!
//       },
//       {
//         Header: props => <span>Friend Age</span>, // Custom header components!
//         accessor: 'Value'

//       },
//       {
//         Header: props => <span>ValueIncVAT</span>, // Custom header components!
//         accessor: 'ValueIncVAT'

//       }]

//     return (
//       <div className="CustomerManager">
//         <ReactTable
//           data={data}
//           columns={columns}
//         />
//         <div onClick={() => this.writeUserData('ceva', 'cevasadsa', 3, 2)}>click me!</div>
//       </div>
//     );
//   }
// }

// export default CustomerManager;