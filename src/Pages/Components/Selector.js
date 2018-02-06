import React, { Component } from 'react';
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
        <RaisedButton primary label={this.props.label} fullWidth={true} onClick={() => this.handleToggle()} />
        {this.state.open &&
          <div>
            <InputRow fields={this.props.fields} />
          </div>}
      </div>
    );
  }
}

export default Selector;
