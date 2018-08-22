import React, { Component } from "react";
import PropTypes from "prop-types";
import AddressPresenter from "./AddressPresenter";

class AddressContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
    this.componentDidMount = () => {
      
    };
  }

  render() {
    return <AddressPresenter {...this.props} {...this.state}
              lowdb={this.props.lowdb}
            />
  }
}

AddressContainer.propTypes = {};

AddressContainer.defaultProps = {
  address: PropTypes.string,
  AccountModal: PropTypes.func.isRequired,
  selectAddress: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
  handleTooltip: PropTypes.func.isRequired,
  toAddress: PropTypes.string,
  amount: PropTypes.string,
  handleInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default AddressContainer;
