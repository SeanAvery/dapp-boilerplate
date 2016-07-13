import React, { Component } from 'react';

import Web3 from 'web3'
import WalletForm from '../components/WalletForm.js'


export default class Wallet extends Component {
  componentDidMount() {
    // web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
    // console.log(web3)
  }

  // constructor(props) {
  //   super(props)
  //
  //
  //   let defaultAccount = web3.eth.getCoinbase((err, res)=>{
  //     console.log(result)
  //   })
  // }
  render() {
    return (
      <WalletForm />
    )
  }
}
