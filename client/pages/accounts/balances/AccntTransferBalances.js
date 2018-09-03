import React, { Component } from "react";
import {   Message  } from "semantic-ui-react";
import web3 from "../../../lib/web3";
import getFixedSupplyTokenInstance from "../../../lib/getFixedSupplyTokenInstance";
import FixedSupplyTokenDefinition from "../../../lib/contracts/FixedSupplyToken";

import Layout from "../../../components/containers/Layout";

class AccntTransferBalances extends Component {
  
  static async getInitialProps(props) {
    try {
      const fixedSupplyToken = await getFixedSupplyTokenInstance(
        web3,
        FixedSupplyTokenDefinition
      );
      console.log("+++++ AccntTransferBalances getInitialProps +++++");
      const accounts = await web3.eth.getAccounts();
      console.log(accounts);
      console.log(fixedSupplyToken);
      const admin = await fixedSupplyToken.methods.owner().call();
      console.log('.... admin ....')
      console.log(admin);
      const symbol= await fixedSupplyToken.methods.symbol().call()
      console.log('.... symbol ....')
      console.log(symbol)
      
      const balanceOf= await fixedSupplyToken.methods.balanceOf(accounts[0]).call()
      console.log('.... balanceOf ....')
      console.log(balanceOf)
 

      return { currentAccount:accounts[0], admin, balanceOf, symbol};
    } catch (error) {
      
      console.log(error);
      return { errorMessage: error.message };
    }
  }

  render() {
    const { currentAccount, balanceOf,  admin, symbol, errorMessage} = this.props;
    const appAdmin = (admin)? admin: ''

    return (
      <Layout>
        <label>Your Account Information and Balances</label>
        <p/>
        <div>Symbol: {symbol}</div>
        <div>Admin: {appAdmin}</div>

        <div>Current Account: {currentAccount}</div>
        <div>Token Balance: {balanceOf}</div>
     
         <Message error header="ERROR" content={errorMessage} />

      </Layout>
    );
  }
}

export default AccntTransferBalances;
