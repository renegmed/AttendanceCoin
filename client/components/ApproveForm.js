import React, { Component } from 'react';
import { Form, Message, Button, Input } from 'semantic-ui-react';
import { Router } from '../routes';
 
export default class ApproveForm extends Component {
  state = {
    tokens: '',
    errorMessage: '',
    loading: false
  };

  async componentDidMount () {
    const { web3, contract, currentAccount, accountBalance, allowance } = this.props 
    this.setState({ 
        web3, 
        contract,                 
        currentAccount, 
        accountBalance,
        allowance,       
    }); 
  }
  
  onSubmit = async event => {
    event.preventDefault(); 

    this.setState({ loading: true, errorMessage: '' });

    try {
      const { contract, currentAccount } = this.state
      
      const result = await contract.methods.approve(
              currentAccount, parseInt(this.state.tokens)).send({
              from: currentAccount               
            });

      console.log('Success?', result)
 
      Router.replaceRoute(`/index/${currentAccount}`);

    } catch (err) {
      console.log(err.message)
      this.setState({ errorMessage: err.message })       
    }
    this.setState({ loading: false, tokens: ''  });
    
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
           
        <Form.Field>          
          <label> Allocate Token for Transfer</label>
          
          <Input
            value={this.state.tokens}
            onChange={event => this.setState({ tokens: event.target.value })}
            label="No. of Tokens"
            labelPosition="left"
          />
          <p></p>
        </Form.Field>
        <Message error header="ERROR" content={this.state.errorMessage} />
        <Button primary loading={this.state.loading}>
        Allocate Tokens Now!
        </Button>
      </Form>
    );
  }
}
 
