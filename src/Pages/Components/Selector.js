import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import InputRow from './InputRow';

import './selector.css';

class Selector extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  }

  addItem = (item) => {
    if (item.Id !== undefined) {
      this.setState({ open: !this.state.open });
      this.props.updateHandler(item);
    }
  }

  render() {
    return (
      <div className="Selector">
        <RaisedButton primary label={this.props.label} fullWidth={true} onClick={() => this.handleToggle()} />
        {this.state.open &&
          <div>
            <InputRow fields={this.props.fields} handleCancel={this.handleToggle} handleSave={this.addItem} />
          </div>}
      </div>
    );
  }
}

export default Selector;
