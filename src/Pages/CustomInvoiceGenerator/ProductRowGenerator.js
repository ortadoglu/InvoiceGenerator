import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';

class ProductGenerator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      productIndex: 0,
      sliderIndex: 0,
    };
  }

  handleProductChange = (event, index, value) => this.setState({ productIndex: value });
  handleSliderChange = (event, value) => this.setState({ sliderIndex: value });
  handleButtonClick = () => this.props.addProduct(this.props.products[this.state.productIndex], this.state.sliderIndex);

  render() {
    return (
      <Paper zDepth={2} children={
        <div className="ProductSelector">
          <DropDownMenu maxHeight={300} value={this.state.productIndex} autoWidth={false} onChange={this.handleProductChange}>
            {this.props.products.map((product, index) => {
              return (
                <MenuItem key={index} value={index} primaryText={product.Name} />
              );
            })}
          </DropDownMenu>
          <Slider min={0} max={50} step={1} onChange={this.handleSliderChange} />
          <RaisedButton primary
            label={"Add " + this.state.sliderIndex + " " + this.props.products[this.state.productIndex].Name}
            disabled={this.state.sliderIndex === 0}
            onClick={this.handleButtonClick} />
        </div>
      } />
    );
  }
}

export default ProductGenerator;