import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import { Router } from '../routes';
 
export default class AllowanceForm extends Component {
  state = {
    spender: '',  
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    const {web3, contract, currentAccount} = this.props;
    console.log("******* AllowanceForm onSubmit() address ***********");
    console.log(web3);
    console.log(contract);   
    console.log('+++++++ current account: ',currentAccount); 
    console.log('+++++++ spender: ', this.state.spender); 
     
    this.setState({ loading: true, errorMessage: '' });

    try {
      //  const accounts = await web3.eth.getAccounts();
      //  console.log("******* AllowanceForm onSubmit()  accounts[0]  ***********");
      //  console.log(accounts[0]);
 

      const remaining = await contract.methods.allowance(
            currentAccount, this.state.spender ).send({
              from: currentAccount,
              value: ''
            });

      console.log('Remaining token: ', remaining)
 
      Router.replaceRoute(`/allowance/${currentAccount}`);

    } catch (err) {
      console.log(err.message)
      this.setState({ errorMessage: err.message })       
    }

    this.setState({ loading: false, spender: ''});
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>          
          <label>Allowance Search</label>
          
          <Input
            value={this.state.spender}
            onChange={event => this.setState({ spender: event.target.value })}
            label="Spender address "
            labelPosition="left"
          />
          <p></p> 
        </Form.Field>

        <Message error header="ERROR" content={this.state.errorMessage} />
        <Button primary loading={this.state.loading}>
          Find
        </Button>
      </Form>
    );
  }
}
 
