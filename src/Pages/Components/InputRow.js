import React, { Component } from 'react';
import 'react-table/react-table.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class InputRow extends Component {
  handleClick() {

  }

  render() {


    return (
      <div className="InputRow">

        {this.props.fields.map(function (field, index) {
          return <TextField className="RowField" key={index} floatingLabelText={field.Header} />;
        })}
        <RaisedButton primary label="Save" fullWidth={true} onClick={this.handleClick} />
      </div>
    );
  }
}

export default InputRow;
