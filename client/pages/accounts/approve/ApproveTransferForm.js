import React, { Component } from "react";
import { Form, Message, Button, Input } from 'semantic-ui-react';
import { Router } from '../../../routes';

import web3 from "../../../lib/web3";
import getFixedSupplyTokenInstance from "../../../lib/getFixedSupplyTokenInstance";
import FixedSupplyTokenDefinition from "../../../lib/contracts/FixedSupplyToken";

class ApproveTransferForm extends Component {
  state = { loading: false, errorMessage: '',  tokens: '', to: '' }  

  static async getInitialProps(props) {
   
    const currentAccount = await web3.eth.getAccounts()[0];
    return {  currentAccount };
  }

    
  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: "" });

    try {
      const { currentAccount } = this.props;
      const fixedSupplyToken = await getFixedSupplyTokenInstance(
        web3,
        FixedSupplyTokenDefinition
      );

      const result = await fixedSupplyToken.methods
        .approve(this.state.to, parseInt(this.state.tokens))
        .send({
          from: currentAccount
        });

      console.log("Success?", result);

      Router.replaceRoute(`/index`);
    } catch (err) {
      console.log(err.message);
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false,  errorMessage: '',tokens: '' });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Allocate Token To Account</label>

          <Input
            value={this.state.to}
            onChange={event => this.setState({ to: event.target.value })}
            label="Allocate To"
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
          Allocate Tokens Now!
        </Button>
      </Form>
    );
  }
}

export default ApproveTransferForm;
