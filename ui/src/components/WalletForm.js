import React, { Component } from 'react';

export default class WalletForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addressValue : "hello",
      amountValue : 0,
    }
  }
  // componentDidMount() {
  //   this.setState({
  //     value: "hello"
  //   })
  // }
  // handleChange(event) {
  //   this.setState({value:event.target.value})
  // }
  handleAddressChange = (e) => {
    this.setState({addressValue: e.target.addressValue})
    console.log(this.state.addressValue)
  }
  handleAmountChange = (e) => {
    this.setState({amountValue: e.target.amountValue})
  }
  render () {
    return (
      <div>
        Send to(address):
        <input
          type="text"
          value={this.state.addressValue}
          onChange={this.handleAddressChange}
        />
        Amount(inWei):
        <input
          type="number"
          value={this.state.amountValue}
          onChange={this.handleAmountChange}
        />
      </div>
    )
  }
}
