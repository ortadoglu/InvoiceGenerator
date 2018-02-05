import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import RaisedButton from 'material-ui/RaisedButton';
import InputRow from './InputRow';

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div className="Selector">
        <RaisedButton primary label="Add another product" fullWidth={true} onClick={() => this.handleToggle()} />
        {this.state.open &&
          <div>
            <InputRow fields={this.props.fields} />
            <RaisedButton primary label="Save" fullWidth={true} onClick={() => this.handleToggle()} />
          </div>}
      </div>
    );
  }
}

export default Selector;
