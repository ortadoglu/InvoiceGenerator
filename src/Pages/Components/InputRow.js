import React, { Component } from 'react';
import 'react-table/react-table.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './inputRow.css';

class InputRow extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (event, name) => {
    let stateObject = {};
    stateObject[name] = event.target.value;
    this.setState(stateObject);
  }

  render() {
    let tempThis = this;
    return (
      <div className="InputRow">
        {this.props.fields.map(function (field, index) {
          return <TextField className="RowField" key={index} floatingLabelText={field.Header} onChange={(e) => tempThis.handleChange(e, field.Header)} />;
        })}
        <div className="InputRowButtons">
          <RaisedButton primary label="Save" onClick={()=>this.props.handleSave(this.state)} />
          <RaisedButton primary label="Cancel" onClick={this.props.handleCancel} />
        </div>
      </div>

    );
  }
}

export default InputRow;
