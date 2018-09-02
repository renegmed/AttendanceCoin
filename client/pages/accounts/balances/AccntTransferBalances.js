import React, { Component } from "react";
import web3 from "../../../lib/web3";
import getFixedSupplyTokenInstance from "../../../lib/getFixedSupplyTokenInstance";
import FixedSupplyTokenDefinition from "../../../lib/contracts/FixedSupplyToken";

import Layout from "../../../components/containers/Layout";

class AccntTransferBalances extends Component {
  //state = {accounts: null, web3: null, balancesList: null}
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
      //const balancesList = await fixedSupplyToken.methods.balances().call();
      //console.log(balancesList);
      return { accounts, admin};
    } catch (error) {
      alert(
        `Failed to load web3, or fixedSupplyToken. Check console for details.`
      );
      console.log(error);
    }
  }

  render() {
    const { accounts, admin } = this.props;

    return (
      <Layout>
        <div>{accounts}</div>
        <div>{admin}</div>
         
      </Layout>
    );
  }
}

export default AccntTransferBalances;
