import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

class PaperButton extends Component {

  render() {
    return (
      <Paper zDepth={2} children={
        <div className="PaperButtonHolder">
            <RaisedButton primary 
              label={this.props.title} 
              onClick={this.props.clickHandler}/>
        </div>
      } />
    );
  }
}

export default PaperButton;
