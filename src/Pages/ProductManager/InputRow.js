import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class InputRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {


    return (
      <div className="InputRow">

        {this.props.fields.map(function (field, index) {
          return <TextField key={index} floatingLabelText={field.Header} />;
        })}
      </div>
    );
  }
}

export default InputRow;
