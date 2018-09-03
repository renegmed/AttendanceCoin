import React, { Component } from "react";
import { Form, Message, Button, Input } from "semantic-ui-react";
import { Router } from "../../../routes";

import web3 from "../../../lib/web3";
import getFixedSupplyTokenInstance from "../../../lib/getFixedSupplyTokenInstance";
import FixedSupplyTokenDefinition from "../../../lib/contracts/FixedSupplyToken";

class MyTransferForm extends Component {
  state = { loading: false, errorMessage: "", tokens: "", to: "" };

  // static async getInitialProps(props) {
  //   console.log('~~~~~~~ MyTransferForm.getInitialProps ~~~~~~~~~')
  //   const accounts = await web3.eth.getAccounts();
  //   console.log(accounts)
  //   //this.setState({ loading: false, errorMessage: "", tokens: "", to: "" })
  //   return { currentAccount: accounts[0] };
  // }

  onSubmit = async event => {
    event.preventDefault();
    console.log('~~~~~~~ MyTransferForm.onSubmit ~~~~~~~~~')
    this.setState({ loading: true, errorMessage: "" });

    try {
      //const { currentAccount } = this.props;
      const accounts = await web3.eth.getAccounts();
      const fixedSupplyToken = await getFixedSupplyTokenInstance(
        web3,
        FixedSupplyTokenDefinition
      );
      const currentAccount = accounts[0]
      console.log(currentAccount)
      console.log(this.state.to)
      console.log(this.state.tokens)

      const result = await fixedSupplyToken.methods
        .transfer(this.state.to, parseInt(this.state.tokens))
        .send({
          from: currentAccount
        });

      console.log("Success?", result);

      Router.replaceRoute(`/index`);
    } catch (err) {
      console.log(err.message);
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false, errorMessage: "", tokens: "" });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
         
          <Input
            value={this.state.to}
            onChange={event => this.setState({ to: event.target.value })}
            label="Transfer To"
            labelPosition="left"
          />
          <p />

          <Input
            value={this.state.tokens}
            onChange={event => this.setState({ tokens: event.target.value })}
            label="No. of Tokens"
            labelPosition="left"
          />
        </Form.Field>
        <Message error header="ERROR" content={this.state.errorMessage} />
        <Button primary loading={this.state.loading}>
          Transfer Tokens Now!
        </Button>
      </Form>
    );
  }
}

export default MyTransferForm;
