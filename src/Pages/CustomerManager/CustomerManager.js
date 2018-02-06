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